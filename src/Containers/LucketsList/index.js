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
