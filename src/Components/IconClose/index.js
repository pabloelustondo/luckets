import React from 'react'
import './index.css'

const IconClose = (props) => (
    <div key={"close"} className='IconClose' onClick={props.edit} >
        <img src="/images/close_1.svg" height="20" width="20" alt="delete.svg" />
    </div>
)

export default IconClose