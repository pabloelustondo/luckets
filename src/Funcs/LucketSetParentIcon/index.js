import React from "react";
import "./index.css";

const imageLocation = '/images/up-arrow.svg';

const LucketSetParentIcon = props => {
  return (
    <img
      onClick={props.backToParent}
      className="LucketSetParentIcon"
      src={imageLocation}
      alt={imageLocation}
    />
  );
};

export default LucketSetParentIcon;
