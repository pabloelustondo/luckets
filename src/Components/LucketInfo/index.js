import React from 'react'
import './index.css'
import LucketTitle from "../LucketTitle";
import LucketTime from "../LucketTime";


const LucketInfo = (props) => {

    let className = (props.focus === true) ? "FocusLucketInfo" : "LucketInfo";
    return (
        <div className={className}>
            <LucketTime status={props.lucket.actionStatus}
                            lucket={props.lucket} updateLucket={props.updateLucket}/>


            <div>
                {props.lucket.actionPlan}
            </div>
        </div>
    )
}

export default LucketInfo