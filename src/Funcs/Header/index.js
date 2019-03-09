import React from "react";
import "./index.css";
import AddLucketIcon from "../AddLucketIcon";
import SettingsIcon from "../SettingsIcon";

//signOut={this.singOut}
const Header = props => (
  <div className="Header">
    <AddLucketIcon addLucket={props.addLucket} />
  </div>
);

export default Header;
