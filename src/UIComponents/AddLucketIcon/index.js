import React from 'react'
import './index.css'

const imageLocation = '/images/add-lucket-icon.svg'

const AddLucketIcon = (props) => (
    <img className='AddLucketIcon' 
    onClick = {props.addLucket}
    src={imageLocation} alt={imageLocation} />
)

export default AddLucketIcon