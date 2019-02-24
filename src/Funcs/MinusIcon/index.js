import React from 'react'
import './index.css'

const imageLocation = '/images/minus.svg'

const MinusIcon = (props) => (
    <img className='MinusIcon' 
    onClick = {props.plusHandler}
    src={imageLocation} alt={imageLocation} />
)

export default MinusIcon