import React from "react";
import "./index.css";

const imageLocation = '/images/focus-icon.svg';

const LucketSetFocusIcon = props => {

  return (
    <img
      onClick={props.setFocus}
      className="LucketSetFocusIcon"
      src={imageLocation}
      alt={imageLocation}
    />
  );
};

export default LucketSetFocusIcon;
