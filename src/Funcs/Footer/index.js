import React from 'react'
import './index.css'
import SettingsIcon from "../SettingsIcon"

const Footer = (props) => (<div className='Footer'>
    <SettingsIcon user={props.user} 
    signOut={props.signOut}
    refresh={props.refresh}
    />
</div>)

export default Footer