import React from 'react'
import './index.css'

const imageLocation = '/images/add.svg'

const PlusIcon = (props) => (
    <img className='PlusIcon' 
    onClick = {props.plusHandler}
    src={imageLocation} alt={imageLocation} />
)

export default PlusIcon