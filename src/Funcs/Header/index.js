import React from "react";
import "./index.css";
import AddLucketIcon from "../AddLucketIcon";
import SettingsIcon from "../SettingsIcon";
import Path from "./Path"

//signOut={this.singOut}
const Header = props => (
  <div className="Header">
    <Path luckets={props.luckets}/>
    <AddLucketIcon addLucket={props.addLucket} />
  </div>
);

export default Header;
