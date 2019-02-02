import React from 'react'
import './index.css'

const imagename = 'add-lucket-icon.svg';
const imageLocation = `/images/${imagename}`

const AddLucketIcon = () => (
    <img className='AddLucketIcon' src={imageLocation} alt={imageLocation} />
)

export default AddLucketIcon