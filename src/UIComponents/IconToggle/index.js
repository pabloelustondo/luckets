import React from 'react'
import './index.css'

const IconToggle = (props) => (
    <div key={"close"} className='IconToggle' onClick={props.edit} >
        <img src="/images/toggle-down.svg" height="20" width="20" alt="toggle.svg" />
    </div>
)

export default IconToggle