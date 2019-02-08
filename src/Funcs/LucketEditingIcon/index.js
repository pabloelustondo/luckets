import React from 'react'
import './index.css'

const LucketEditingItem = (props) => {return(
    <img src="/images/edit.svg" className="LucketSetParentIcon" onClick={()=>{props.setEditing(props.lucket)}}/>
)}





export default LucketEditingItem