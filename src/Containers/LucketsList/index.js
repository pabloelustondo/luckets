import React, { Component } from "react";
import "./index.css";
import LucketsItem from "../../Funcs/LucketItem";
import FocusLucket from "../../Funcs/FocusLucket";
import Header from "../../Funcs/Header";
import Footer from "../../Funcs/Footer";
import { getData } from "../../Data/DataService"

import { getRootLucket, getChildrenLuckets, getParentLucket} from "../../Models/LuketsModel";

class LucketsList extends Component {
  state = { 
    luckets: [], 
    focusLucket: null,
    editingLucket: null,
};

  setFocus = (lucket) => {
    this.setState({focusLucket: lucket}) 
  }
 
  backToParent = () => {
    let newFocusLucket = getParentLucket(this.state.luckets, this.state.focusLucket);
    this.setState( { focusLucket: newFocusLucket }  )
  }

  componentDidMount = () => {
    getData( (luckets) => { this.setState({ luckets: luckets }) } )
  };

  render() {

    var focusLucket = (this.state.focusLucket == null )?getRootLucket(this.state.luckets): this.state.focusLucket
    var childrenLucket = getChildrenLuckets(this.state.luckets, focusLucket);

   return(
      <div className="LucketsList">
        <Header />
        <FocusLucket lucket={focusLucket} backToParent={this.backToParent} />
        <div className="LucketsListChildren">
          {childrenLucket.map(lucket => (
            <LucketsItem lucket={lucket} key={lucket.name} setFocus={this.setFocus}  />
          ))}
        </div>
        <Footer />
      </div>
   )
  }
}

export default LucketsList;
