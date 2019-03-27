import React from "react";
import "./index.css";
import iconsList from "./icons"

const imageLocation = imagename => `/images/${imagename}.svg`;

/*
          lucket={props.lucket} 
          setEditing={props.setEditing}
*/

const LucketIcons = (props) => {
    return iconsList.map(o => (
    <img
      className="LucketIcon"
      src={imageLocation(o)}
      alt={o}
      onClick={() =>  {
        props.updateLucket( {...props.lucket, icon:o + ".svg" } );
        props.setEditing(false); 
        } }     
    />
  ));
};

export default LucketIcons;
