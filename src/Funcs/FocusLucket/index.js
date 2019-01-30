import React from "react";
import "./index.css";
import LucketItem from "../LucketItem";

const FocusLucket = props => (
  <div className="FocusLucket">
    <LucketItem lucket={props.lucket} backToLife={()=>{props.backToLife()}} focus={true} />
  </div>
);

export default FocusLucket;
