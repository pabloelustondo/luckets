import React from 'react'
import './LucketItem.css'
import LucketTitle from '../../FunctionalComponents/LucketTitle/LucketTitle';
import LucketStatusIcon from '../../FunctionalComponents/LucketStatusIcon/LucketStatusIcon';
import LucketActionStatusIcon from '../../FunctionalComponents/LucketActionStatusIcon/LucketActionStatusIcon';
import LucketIcon from '../../FunctionalComponents/LucketIcon/LucketIcon';


const LucketItem = (props) => (
    <div className='LucketItem'>
    <LucketIcon id={props.id} />
    <LucketActionStatusIcon status='green' />
    <LucketActionStatusIcon status='green' />
    <LucketStatusIcon status='green' />
    <LucketTitle id={props.id} />
    </div>
)

export default LucketItem