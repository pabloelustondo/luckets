import React from 'react'
import './index.css'
import AddLucketIcon from '../AddLucketIcon'

const Header = (props) => (<div className='Header' onClick = {props.addLucket} >
    <AddLucketIcon  addLucket={props.addLucket}/>
</div>)

export default Header