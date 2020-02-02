import React, { Component } from "react";
import "./index.css";

import {FUNCS
} from "../../Logic/LuketsModel";

const imageLocation = "/images/settings.svg";


class SettingsIcon extends Component {
  state = {
    show: false
  };

  show = () => {
       
      this.setState({show:!this.state.show})
  }

  render() {
    return (
      <div>
      <img
        className="SettingsIcon"
        onClick={this.show}
        src={imageLocation}
        alt={imageLocation}
      />
      {(this.state.show === true)?
      <div className="SettingsPanel">
      {this.props.user ? <div>{this.props.user.displayName}</div> : null}
      <button onClick={this.props.signOut}> SignOut </button>
      <button onClick={this.props.setDayToToday}> Set Day to Today </button>
        <button onClick={() => FUNCS.pushDataToServer(this.props.luckets)}> Push Data to Server </button>
        <button onClick={() => FUNCS.resetTemplate(this.props.luckets)}> Reset Template </button>
        <button onClick={() => FUNCS.exportTemplate(this.props.luckets)}> Export Template </button>
      </div>:null}
      </div>
    );
  }
}

export default SettingsIcon;
