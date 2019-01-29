import React from "react";
import "./index.css";
import LucketItem from "../LucketItem";

const FocusLucket = props => (
  <div className="FocusLucket">
    <LucketItem lucket={props.lucket} focus={true} />
  </div>
);

export default FocusLucket;
