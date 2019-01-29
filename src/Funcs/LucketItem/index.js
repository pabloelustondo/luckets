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
    return (
    <div className='LucketItem'>
    <LucketIcon icon={props.lucket.icon} />
    <LucketStatusIcon status={props.lucket.status} />
    <LucketActionStatusIcon status={props.lucket.actionStatus} />
    <LucketTitle id={props.lucket.name} />
    <LucketPointsIcon points={props.lucket.points} />
    <LucketRelativePointsIcon points='44' totalPoints='77'/>
    <LucketSetFocusIcon />
    </div>
)}

export default LucketItem