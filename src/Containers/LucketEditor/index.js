import React, { Component } from "react";
import "./index.css";

import axios from "axios";

import LucketsItem from "../../Funcs/LucketItem";
import FocusLucket from "../../Funcs/FocusLucket";
import { getRootLucket } from "../../Models/LuketsModel";

class LucketsList extends Component {
  state = { 
    luckets: {}, 
    focusLucket: null,
    editingLucket: null 
};

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

    let focusLucket = getRootLucket(luckets);

    console.log(luckets);
    return (
      <div>
        { focusLucket? <FocusLucket lucket={focusLucket} />:null}
        <div className="LucketsList">
          {luckets.map(l => (
            <LucketsItem key={l.name} lucket={l} />
          ))}
        </div>
      </div>
    );
  }
}

export default LucketsList;
