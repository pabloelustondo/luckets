import React from 'react'
import './index.css'
import LucketTitle from '../../Funcs/LucketTitle';
import LucketStatusIcon from '../../Funcs/LucketStatusIcon';
import LucketPointsIcon from '../../Funcs/LucketPointsIcon';
import LucketRelativePointsIcon from '../../Funcs/LucketRelativePointsIcon';
import LucketActionStatusIcon from '../../Funcs/LucketActionStatusIcon';
//import LucketPowerStatusIcon from '../../Funcs/LucketPowerStatusIcon';
import LucketIcon from '../../Funcs/LucketIcon/LucketIcon';


const LucketItem = (props) => (
    <div className='LucketItem'>
    <LucketIcon id={props.id} />
    <LucketStatusIcon status='green' />
    <LucketActionStatusIcon status='green' />
    <LucketTitle id={props.id} />
    <LucketPointsIcon points='1' />
    <LucketRelativePointsIcon points='44' totalPoints='77'/>


    </div>
)

export default LucketItem