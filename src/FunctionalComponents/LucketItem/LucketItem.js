import React from 'react'
import './LucketItem.css'

const imageLocation = (imagename) => `/images/${imagename}.svg`

const LucketItem = (props) => (
    <div className='LucketItem'>
    <img className='LucketIcon' src={imageLocation(props.id)} alt={props.id + '.svg'} />
    {props.id}
    </div>
)
//http://localhost:3000/public/images/accounting.svg
export default LucketItem