import React, { Component } from "react";
import "./index.css";

import axios from "axios";

import LucketsItem from "../../Funcs/LucketItem";
import FocusLucket from "../../Funcs/FocusLucket";
import Header from "../../Funcs/Header";
import Footer from "../../Funcs/Footer";

import { getRootLucket, getChildrenLuckets, getParentLucket} from "../../Models/LuketsModel";

class LucketsList extends Component {
  state = { 
    luckets: [], 
    focusLucket: null,
    editingLucket: null,
};

  setFocus = (lucket) => {
    console.log(lucket)
    this.setState({focusLucket: lucket}) 
  }
 
  backToParent = () => {
    let newFocusLucket = getParentLucket(this.state.luckets, this.state.focusLucket);
    this.setState( { focusLucket: newFocusLucket }  )
  }

  componentDidMount = () => {
    axios
      .get("https://luckets-5fbb4.firebaseio.com/luckets.json")
      .then(response => {
        let luckets = Object.keys(response.data).map(
          key => response.data[key]
        );
        this.setState({ luckets: luckets });
      })
      .catch(err => {
        this.setState({
          error: err
        });
        alert(err);
      });
  };

  render() {

    var focusLucket;
    
    if(this.state.focusLucket == null ) {
      focusLucket = getRootLucket(this.state. luckets)
      console.log("hello")
      console.log(focusLucket)
    } else {
       focusLucket = this.state.focusLucket
    }
    

    var childrenLucket = getChildrenLuckets(this.state.luckets, focusLucket);

   return(
      <div className="LucketsList">
        <Header />
        <FocusLucket lucket={focusLucket} backToLife={()=>{this.backToParent()}} />
        <div className="LucketsListChildren">
          {childrenLucket.map(lucket => (
            <LucketsItem key={lucket.name} updateFocus={()=>{this.setFocus(lucket)}} lucket={lucket} />
          ))}
        </div>
        <Footer />

      </div>
   )
  
  }
}

export default LucketsList;
