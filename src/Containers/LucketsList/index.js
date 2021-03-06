import React, { Component } from "react";
import "./index.css";
import LucketsItem from "../../UIComponents/LucketItem";
import FocusLucket from "../../UIComponents/FocusLucket";
import Header from "../../UIComponents/Header";
import Footer from "../../UIComponents/Footer";
import { patchData, postData, postHistory, patchAllLuckets } from "../../Data/DataService";
import LucketCategoryView from "../../UIComponents/LucketCategoryView"

import {
  log,
  fixActionStatus,
  getRootLucket,
  getChildrenLuckets,
  getParentLucket,
  getNewLucket,
  updateLucket,
  filterForDo,
  isSameDay,
  cleanActionStatus,
  calculatePoints,
  categorize,
  categorizeByTime,
} from "../../Logic/LuketsModel";

class LucketsList extends Component {
  state = {
    focusLucket: null,
    editing: null,
    infoLevel: "normall"
  };

  postHistory = () => {

    if (false && isSameDay(this.props.userInfo.openDay, new Date())) {
      alert("Sorry, cannot archive the day your are on, wait until tomorrow (DISABLED)");
      return;
    } else {
      const openDay = {
        luckets: this.props.luckets,
        userInfo: this.props.userInfo
      };
      postHistory(this.props.user, openDay, () => {
        patchAllLuckets(this.props.user, cleanActionStatus(this.props.luckets, this.props.timeFrame));
        this.props.setDayToToday();
        this.props.setCleanToDoList();
      });
    }
  };

  /*
  postHistory = () => {
    const openDay = { luckets: this.props.luckets, userInfo:this.props.userInfo }
    postHistory(this.props.user, openDay, () => {
    this.props.setDayToToday();
    })
  }

  */
  setFocus = lucket => {
    this.setState({ focusLucket: lucket });
  };

  updateLucket = lucket => {
    log("UPDATE LUCKET", lucket);
    log("UPDATE LUCKET NUMBER OF EXISTING LUCKETS", this.props.luckets.length);
    let allLuckets = this.props.luckets.map(l => {
      if (l.id === lucket.id) {
        return lucket;
      } else {
        return l;
      }
    });

    const newLuckets = allLuckets.filter( l => l.id );

    log("UPDATE LUCKET NUMBER OF LUCKETS WITH ID", newLuckets.length );

    if (this.state.focusLucket && this.state.focusLucket.id === lucket.id) {
      this.setFocus(lucket);
    } //this is a hack... need to refactor an use an ID for focius lucket
    this.props.setLuckets(newLuckets);
    patchData(this.props.user, lucket, () => {});
  };

  setEditing = lucket => {
    let editingObj = this.state.editing;
    if (editingObj != null && editingObj.name === lucket.name) {
      this.setState({ editing: null });
    } else {
      this.setState({ editing: lucket });
    }
  };

  backToParent = () => {
    if (this.state.focusLucket && this.state.focusLucket.parent !== null) {
      let newFocusLucket = getParentLucket(
        this.props.luckets,
        this.state.focusLucket
      );
      this.setState({ focusLucket: newFocusLucket });
    }
  };

  addLucket = () => {
    const newLucket = getNewLucket(this.state.focusLucket);
    let newLuckets = [...this.props.luckets, newLucket];
    this.props.setLuckets(newLuckets);
    postData(this.props.user, newLucket, () => {});
  };

  render() {
    const luckets = this.props.luckets.filter( l => true);
    log("LUCKETS LIST NUMBER TO RENDER", luckets.length);


    //fix luckets if wrong date this is temporary code

    fixActionStatus(this.props.luckets);

    let focusLucket = null;
    let _childrenLucket = [];

    if (this.props.luckets) {
      focusLucket =
        this.state.focusLucket == null
          ? getRootLucket(this.props.luckets)
          : this.state.focusLucket;
      _childrenLucket = getChildrenLuckets(this.props.luckets, focusLucket);
    }

    focusLucket = calculatePoints(this.props.luckets, focusLucket,this.props.timeFrame);

    if (this.props.step === "Do" || this.props.step === "Time" || this.props.step === "Close" ) {
      _childrenLucket = filterForDo(_childrenLucket, this.props.timeFrame);
    }

    const __childrenLucket = _childrenLucket.map( l => calculatePoints(this.props.luckets,l,this.props.timeFrame) );
    let __allLucketsWithPoints = [];

    if (this.props.luckets) {
      __allLucketsWithPoints = this.props.luckets.map(l => calculatePoints(this.props.luckets, l,this.props.timeFrame));
    }

    let lucketCategories;



    if (this.props.step === "Do") {
      lucketCategories = categorizeByTime(__allLucketsWithPoints || [],this.props.timeFrame);
    } else {
      lucketCategories = categorize(__childrenLucket);
    }

    const lucketsCat = lucketCategories.filter( l => true);
    log("LUCKETS LIST CCTEGORIES ", lucketsCat);

    return (
      <div className="LucketsList">
        <Header
          postHistory={this.postHistory}
          setStep={this.props.setStep}
          setTimeFrame={this.props.setTimeFrame}
          step={this.props.step}
          timeFrame={this.props.timeFrame}
          userInfo={this.props.userInfo}
          luckets={this.props.luckets}
          addLucket={this.addLucket}
          user={this.props.user}
          focusLucket={this.state.focusLucket}
          signOut={this.props.signOut}
        />
        <FocusLucket
            timeFrame={this.props.timeFrame}
          infoLevel={this.state.infoLevel}
          editingLucket={this.state.editing}
          lucket={focusLucket}
          backToParent={this.backToParent}
          setEditing={this.setEditing}
          updateLucket={this.updateLucket}
        />
        <div className='LucketsListChildren'>
          {lucketCategories.map( cat =>
        <LucketCategoryView category={cat} key={cat.category}>
            <div>
              {cat.luckets.map(lucket => {
                  const key = cat.category + lucket.id;
                  return    <LucketsItem
                      timeFrame={this.props.timeFrame}
                    luckets={this.props.luckets}
                    infoLevel={this.state.infoLevel}
                    editingLucket={this.state.editing}
                    lucket={lucket}
                    key={key}
                    setEditing={this.setEditing}
                    setFocus={this.setFocus}
                    updateLucket={this.updateLucket}
                />
            })}
            </div>
        </LucketCategoryView>)}
        </div>
        <Footer
          postHistory={this.postHistory}
          setStep={this.props.setStep}
          setTimeFrame={this.props.setTimeFrame}
          step={this.props.step}
          timeFrame={this.props.timeFrame}
          userInfo={this.props.userInfo}
          luckets={this.props.luckets}
          addLucket={this.addLucket}
          user={this.props.user}
          focusLucket={this.state.focusLucket}
          signOut={this.props.signOut}
        />
      </div>
    );
  }
}

export default LucketsList;
