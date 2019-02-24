import React from 'react'
import './index.css'

const LucketStatusIcon = (props) => (
    <div className='LucketTitle' 
    onClick={()=>{props.setEditing(props.lucket)}} >{props.id}</div>
)

export default LucketStatusIcon