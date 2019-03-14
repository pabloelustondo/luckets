import React, { Component } from "react";
import "./index.css";

const imageLocation = imagename => `/images/${imagename}`;
const colorClass = color => "LucketStatusIcon1 status-" + color;
const colorFloatClass = color => "LucketStatusIcon1 statusfloat-" + color;
class LucketStatusIcon1 extends Component {
  state = {
    edit: false
  };

  edit = () => {
    if (this.state.edit === false) {
      this.setState({ edit: true });
    } else {
      this.setState({ edit: false });
    }
  };

  set = (event, v) => {
    event.stopPropagation();
    this.setState({ edit: false });
    let lucket = this.props.lucket;
    lucket.status = v;
    this.props.updateLucket(lucket);
  };

  render() {
    let options = [
      "blue",
      "green",
      "white",
      "yellow",
      "red",
      "purple",
      "black"
    ];

    return (
      <div>
                <img
            className="LucketIcon1"
            src={imageLocation("A1-Mind.svg")}
            alt={"props.icon"}
          />
        <div
          className={"LucketStatusIcon1 " + colorClass(this.props.status)}
          style={{ backgroundColor: this.props.status }}
          onClick={this.edit}
        >
          {this.state.edit === true ? (
            <div>
              <div className="LucketStatusIcon1Callout" />
              <div id="menu" className="LucketStatusIcon1Menu">
                {options
                  .filter(o => o !== this.props.status)
                  .map(o => (
                    <div
                      key={o}
                      className={"LucketStatusIconShort1 " + colorFloatClass(o)}
                      onClick={e => this.set(e, o)}
                    />
                  ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default LucketStatusIcon1;
