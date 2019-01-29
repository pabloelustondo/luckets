import React from "react";
import "./index.css";

const imageLocation = imagename => `/images/${imagename}`;

const LucketSetFocusIcon = props => {
  let iconName = (props.focus === true)?'exit2parent.svg':'focusIcon.svg';  
  return (
    <img
      className="LucketSetFocusIcon"
      src={imageLocation(iconName)}
      alt={imageLocation(iconName)}
    />
  );
};

export default LucketSetFocusIcon;
