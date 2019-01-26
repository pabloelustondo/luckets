import React from 'react'
import './LucketIcon.css'

const imageLocation = (imagename) => `/images/${imagename}.svg`

const LucketIcon = (props) => (
    <img className='LucketIcon' src={imageLocation(props.id)} alt={props.id + '.svg'} />
)

export default LucketIcon