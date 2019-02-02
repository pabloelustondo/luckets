import React from "react";
import "./index.css";
import LucketItem from "../LucketItem";

const FocusLucket = props => (
  <div className="FocusLucket">
  {(props.lucket )?
    <LucketItem lucket={props.lucket} backToLife={()=>{props.backToLife()}} focus={true} />:null
    }
  </div>
);

export default FocusLucket;
