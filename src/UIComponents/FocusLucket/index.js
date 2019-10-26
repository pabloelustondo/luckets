import React from "react";
import "./index.css";
import LucketItem from "../LucketItem";

const FocusLucket = props => (
  <div className="FocusLucket">
  {(props.lucket )?
    <LucketItem setEditing={props.setEditing} editingLucket={props.editingLucket} 
    lucket={props.lucket} backToParent={props.backToParent} focus={true} 
    updateLucket={props.updateLucket}

    />:null
    }
  </div>
);

export default FocusLucket;
