import React, { Component } from "react";
import "./index.css";

import axios from "axios";

import LucketsItem from "../../Funcs/LucketItem";
import FocusLucket from "../../Funcs/FocusLucket";
import { getRootLucket, getChildrenLuckets } from "../../Models/LuketsModel";

class LucketsList extends Component {
  state = { 
    luckets: {}, 
    focusLucket: null,
    editingLucket: null,
};

//this.state.luckets["A1-Mind"]

  setFocus = (lucket) => {
    console.log(lucket)
    this.setState({focusLucket: lucket}) 
  }
 
  backToLife = () => {
    this.setState({focusLucket: getRootLucket(Object.keys(this.state.luckets).map(
      key => this.state.luckets[key]
    ))})
  }

  componentDidMount = () => {
    axios
      .get("https://luckets-5fbb4.firebaseio.com/luckets.json")
      .then(response => {
        this.setState({ luckets: response.data });
      })
      .catch(err => {
        this.setState({
          error: err
        });
        alert(err);
      });
  };

  render() {
    let luckets = Object.keys(this.state.luckets).map(
      key => this.state.luckets[key]
    );
    var focusLucket;
    
    if(this.state.focusLucket == null){
      focusLucket = getRootLucket(luckets)
      console.log("hello")
      console.log(focusLucket)
    } else {
       focusLucket = this.state.focusLucket
    }
    

    var childrenLucket = getChildrenLuckets(luckets,focusLucket);

   return(
      <div className="LucketsList">
        { focusLucket? <FocusLucket lucket={focusLucket} backToLife={()=>{this.backToLife()}} />:null}
        <div className="LucketsListChildren">
          {childrenLucket.map(l => (
            <LucketsItem key={l.name} updateFocus={()=>{this.setFocus(l)}} backToLife={()=>{this.backToLife()}} lucket={l} />
          ))}
        </div>

      </div>
   )
  
  }
}

export default LucketsList;
