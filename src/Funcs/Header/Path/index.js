import React from 'react'
import './index.css'

const imageLocation = (imagename) => `/images/${imagename}`


/*
          lucket={props.lucket} 
          setEditing={props.setEditing}
*/

const Path = (props) => {

    const view = (props.luckets)?
        <img className='LucketIcon' 
        src={imageLocation(props.luckets[1].icon)} 
        alt={props.luckets[0].icon}
        onClick={()=>{props.setEditing(   { id:props.lucket.id, feature:"icon"} )}}
         /> :null

    return view;
}

export default Path