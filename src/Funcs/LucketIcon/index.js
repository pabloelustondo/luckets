import React from 'react'
import './index.css'

const imageLocation = (imagename) => `/images/${imagename}`


/*
          lucket={props.lucket} 
          setEditing={props.setEditing}
*/

const LucketIcon = (props) => (
    <img className='LucketIcon' 
    src={imageLocation(props.icon)} 
    alt={props.icon}
    onClick={()=>{props.setEditing(   { id:props.lucket.id, feature:"icon"} )}}
     />
)

export default LucketIcon