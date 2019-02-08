import React from 'react'
import './index.css'



const LucketEditingItem = (props) => {
  let classname = (props.focus === true) ? "LucketEditingIcon" : "LucketEditingIconLight";
  return(
    <img src="/images/edit.svg" className={classname} onClick={()=>{props.setEditing(props.lucket)}}/>
)
}





export default LucketEditingItem