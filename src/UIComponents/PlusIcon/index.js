import React from 'react'
import './index.css'

const imageLocation = '/images/add.svg'

const PlusIcon = (props) => (
    <img className='PlusIcon' 
    onClick = {props.onClick}
    src={imageLocation} alt={imageLocation} />
)

export default PlusIcon