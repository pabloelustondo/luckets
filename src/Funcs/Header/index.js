import React from "react";
import "./index.css";
import AddLucketIcon from "../AddLucketIcon";
//signOut={this.singOut}
const Header = props => (
  <div className="Header">
    {props.user ? props.user.displayName : null}
    <button onClick={props.signOut}> SignOut </button>
    <AddLucketIcon addLucket={props.addLucket} />
  </div>
);

export default Header;
