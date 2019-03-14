import React from "react";
import "./index.css";
import iconsList from "./icons"

const imageLocation = imagename => `/images/${imagename}.svg`;

/*
          lucket={props.lucket} 
          setEditing={props.setEditing}
*/

const LucketIcons = () => {
    return iconsList.map(o => (
    <img
      className="LucketIcon"
      src={imageLocation(o)}
      alt={o}
      onClick={() => {
        alert("selected: " + o);
      }}
    />
  ));
};

export default LucketIcons;
