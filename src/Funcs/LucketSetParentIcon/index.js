import React from "react";
import "./index.css";

const imageLocation =  (hasParent) => (hasParent)?'/images/up-arrow.svg':'/images/lineThick.svg';

const LucketSetParentIcon = props => { 

  return (
    <img
      onClick={() => (props.lucket.parent != "")?props.backToParent():null}
      className="LucketSetParentIcon"
      src={imageLocation(props.lucket.parent != "")}
      alt={imageLocation(props.lucket.parent != "")}
    />
  );
};

export default LucketSetParentIcon;
