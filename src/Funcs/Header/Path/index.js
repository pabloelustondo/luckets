import React from 'react'
import './index.css'
import {getPath} from "../../../Models/LuketsModel"

const imageLocation = (imagename) => `/images/${imagename}`


/*
          lucket={props.lucket} 
          setEditing={props.setEditing}
*/

const Path = (props) => {

    if (!props.luckets || !props.focusLucket) return null;

    const path = getPath(props.luckets, props.focusLucket);


    const view = path.map( l =>
        { return ( l.parent !== "") ? 
        <img className='LucketPathIcon' 
        src={imageLocation(l.icon)} 
        alt={l.icon}
        onClick={()=>{props.setFocus(l) }}
        /> : null } 
    )

    return <div className='LucketPath'>{view}</div>;
}

export default Path