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
    
    return (
    <div className='LucketRelativePointsIcon'
    onClick={handleEvent}>
    {props.lucket.doneActionPoints}/{props.lucket.totalActionPoints}
    </div>
)}

export default LucketRelativePointsIcon