import React from 'react'
import './index.css'

const imageLocation = (imagename) => `/images/${imagename}`

const LucketIcon = (props) => (
    <img className='LucketIcon' src={imageLocation(props.icon)} alt={props.icon} />
)

export default LucketIcon