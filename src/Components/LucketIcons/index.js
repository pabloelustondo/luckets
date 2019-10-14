import React from "react";
import "./index.css";
import iconsList from "./icons"
import IconClose from "../IconClose";

const imageLocation = imagename => `/images/${imagename}.svg`;

/*
          lucket={props.lucket} 
          setEditing={props.setEditing}
*/

const LucketIcons = (props) => {
    return <div>
        <div className='LucketIconsClose' onClick={() => props.setEditing(false)}>Close</div>
        {iconsList.map(o => (
            <img
                className="LucketIcon"
                src={imageLocation(o)}
                alt={o}
                onClick={() => {
                    props.updateLucket({...props.lucket, icon: o + ".svg"},props.timeFrame);
                    props.setEditing(false);
                }}
            />
        ))}
    </div>

        ;
};

export default LucketIcons;
