import React from 'react'
import './index.css'

const LucketDoneButton = (props) => (
    <button className='LucketDoneButton' 
    onClick={ props.postHistory }  value="Done" >Archive</button>
)

export default LucketDoneButton