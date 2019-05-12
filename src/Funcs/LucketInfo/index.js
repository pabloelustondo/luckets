import React from 'react'
import './index.css'
import LucketTitle from "../LucketTitle";


const LucketInfo = (props) => {

    let className = (props.focus === true) ? "FocusLucketInfo" : "LucketInfo";
    return (
    <div className={className}>
    <div >
    {props.lucket.actionPlan}
    </div>
    </div>
)}

export default LucketInfo