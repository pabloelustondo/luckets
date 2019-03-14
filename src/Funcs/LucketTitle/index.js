import React from 'react'
import './index.css'

const LucketStatusIcon = (props) => (
    <div className='LucketTitle' 
    onClick={()=>{props.setEditing( {id:props.lucket.id, feature:"full"}  )}} >{props.id}</div>
)

export default LucketStatusIcon