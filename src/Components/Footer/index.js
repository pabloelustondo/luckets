import React from 'react'
import './index.css'
import SettingsIcon from "../SettingsIcon"
import LucketDoneButton from "../LucketDoneButton";
import AddLucketIcon from "../AddLucketIcon";

const Footer = (props) => (<div className='Footer'>

<div className="HeaderItem"></div>
<SettingsIcon user={props.user} 
    signOut={props.signOut}
    />

<div className="FooterItemRigth">
     {props.step === "Close" ? <LucketDoneButton 
        user={props.user} 
        postHistory={props.postHistory}
      /> : null}
      {props.step === "Plan" ? (
        <AddLucketIcon addLucket={props.addLucket} />
      ) : null}
</div>



</div>)

export default Footer