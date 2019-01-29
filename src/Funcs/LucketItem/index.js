import React from 'react'
import './index.css'
import LucketTitle from '../../Funcs/LucketTitle';
import LucketStatusIcon from '../../Funcs/LucketStatusIcon';
import LucketPointsIcon from '../../Funcs/LucketPointsIcon';
import LucketRelativePointsIcon from '../../Funcs/LucketRelativePointsIcon';
import LucketActionStatusIcon from '../../Funcs/LucketActionStatusIcon';
//import LucketPowerStatusIcon from '../../Funcs/LucketPowerStatusIcon';
import LucketIcon from '../../Funcs/LucketIcon';
import LucketSetFocusIcon from '../../Funcs/LucketSetFocusIcon';


const LucketItem = (props) => {
    console.log(props);
    let classNames = 'LucketItem';
    if (props.focus === true){
        classNames += ' FocusBackgroundColor';
    }
    return (
    <div className={classNames}>
    <LucketIcon icon={props.lucket.icon} />
    <LucketActionStatusIcon status={props.lucket.actionStatus} />
    <LucketStatusIcon status={props.lucket.status} />
    <LucketTitle id={props.lucket.name} />
    <LucketPointsIcon points={props.lucket.points} />
    <LucketRelativePointsIcon points='44' totalPoints='77'/>
    <LucketSetFocusIcon focus = {props.focus}/>
    </div>
)}

export default LucketItem