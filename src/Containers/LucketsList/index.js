import React, { Component } from "react";
import "./index.css";
import LucketsItem from "../../Funcs/LucketItem";
import FocusLucket from "../../Funcs/FocusLucket";
import Header from "../../Funcs/Header";
import Footer from "../../Funcs/Footer";
import { patchData, postData, postHistory, patchAllLuckets } from "../../Data/DataService";
import LucketCategoryView from "../../Funcs/LucketCategoryView"

import {
  getRootLucket,
  getChildrenLuckets,
  getParentLucket,
  getNewLucket,
  updateLucket,
  filterForDo,
  isSameDay,
    cleanActionStatus,
  calculatePoints
} from "../../Models/LuketsModel";

class LucketsList extends Component {
  state = {
    focusLucket: null,
    editing: null,
    infoLevel: "normall"
  };

  postHistory = () => {
    if (isSameDay(this.props.userInfo.openDay, new Date())) {
      alert("Sorry, cannot archive the day your are on, wait until tomorrow");
      return;
    } else {
      const openDay = {
        luckets: this.props.luckets,
        userInfo: this.props.userInfo
      };
      postHistory(this.props.user, openDay, () => {
        patchAllLuckets(this.props.user, cleanActionStatus(this.props.luckets));
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
    let newLuckets = this.props.luckets.map(l => {
      if (l.id === lucket.id) {
        return lucket;
      } else {
        return l;
      }
    });
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
    let focusLucket = null;
    let _childrenLucket = [];

    if (this.props.luckets) {
      focusLucket =
        this.state.focusLucket == null
          ? getRootLucket(this.props.luckets)
          : this.state.focusLucket;
      _childrenLucket = getChildrenLuckets(this.props.luckets, focusLucket);
    }

    focusLucket = calculatePoints(this.props.luckets, focusLucket);

    if (this.props.step === "Do") {
      _childrenLucket = filterForDo(_childrenLucket);
    }

    const __childrenLucket = _childrenLucket.map( l => calculatePoints(this.props.luckets,l) );

    const childrenLucket = [ { childrenLucket:__childrenLucket}  ];

    // putting the children inside categories





    debugger;
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
          infoLevel={this.state.infoLevel}
          editingLucket={this.state.editing}
          lucket={focusLucket}
          backToParent={this.backToParent}
          setEditing={this.setEditing}
          updateLucket={this.updateLucket}
        />
        <LucketCategoryView>
        {childrenLucket.map( cat =>
            <div>
              {cat.childrenLucket.map(lucket => (
                <LucketsItem
                    infoLevel={this.state.infoLevel}
                    editingLucket={this.state.editing}
                    lucket={lucket}
                    key={lucket.id}
                    setEditing={this.setEditing}
                    setFocus={this.setFocus}
                    updateLucket={this.updateLucket}
                />
            ))}
            </div>
        )};

        </LucketCategoryView>
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
