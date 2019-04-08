import React from "react";
import "./index.css";
import AddLucketIcon from "../AddLucketIcon";
import SettingsIcon from "../SettingsIcon";
import LucketStepIcon from "../LucketStepIcon";
import Path from "./Path";

//signOut={this.singOut}
const Header = props => (
  <div className="Header">
    <div className="HeaderItemLeft">
      <LucketStepIcon status="green" />
    </div>

    <div className="HeaderItemCenter">
      <Path luckets={props.luckets} focusLucket={props.focusLucket} />
    </div>

    <div className="HeaderItemRigth">
      <AddLucketIcon addLucket={props.addLucket} />
    </div>
  </div>
);

export default Header;
