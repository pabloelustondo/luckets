import React from 'react'
import './LucketItem.css'

const LucketItem = (props) => (
    <div className='LucketItem'>
    <i class="material-icons">face</i>
        {props.id}
    <i class="material-icons orange600" >face</i>
    </div>
)

export default LucketItem