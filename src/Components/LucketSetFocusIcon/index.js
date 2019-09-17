import React from "react";
import "./index.css";

const imageLocation = '/images/down-arrow.svg';

const LucketSetFocusIcon = props => {
  let classname = (props.focus === true) ? "LucketSetFocusIcon" : "LucketSetFocusIconLight";
  return (
    <img
      onClick={props.setFocus}
      className={classname}
      src={imageLocation}
      alt={imageLocation}
    />
  );
};

export default LucketSetFocusIcon;
