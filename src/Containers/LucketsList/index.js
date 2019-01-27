import React, { Component } from "react";
import "./index.css";

import axios from "axios";

import LucketsItem from "../../Funcs/LucketItem";

class LucketsList extends Component {
  state = { luckets: {},
            focusLucket:null
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

    console.log(luckets);
    return (
      <div className="LucketsList">
        {luckets.map(l => (
          <LucketsItem key={l.name} lucket={l} />
        ))}
      </div>
    );
  }
}

export default LucketsList;
