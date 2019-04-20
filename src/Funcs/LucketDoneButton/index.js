import React from 'react'
import './index.css'

const LucketDoneButton = (props) => (
    <button className='LucketDoneButton' 
    onClick={ props.postHistory }  value="Done" > Done </button>
)

export default LucketDoneButton