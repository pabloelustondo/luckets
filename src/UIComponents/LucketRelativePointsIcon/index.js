import React from 'react'
import './index.css'

const LucketRelativePointsIcon = (props) => {

    const handleEvent = () => {
        if (!props.focus === true){
        props.setFocus();}
        else {
            props.backToParent();
        }
    }

    const status = props.lucket.childrenActionStatus;
    const className = 'LucketRelativePointsIcon status-' + status;
    
    return (
    <div className = { className }
    onClick={handleEvent}>
    {props.lucket.doneActionPoints}-{props.lucket.totalActionPoints}
    </div>
)}

export default LucketRelativePointsIcon