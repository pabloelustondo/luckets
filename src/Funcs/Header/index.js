import React from "react";
import "./index.css";
import AddLucketIcon from "../AddLucketIcon";
import LucketStepIcon from "../LucketStepIcon";
import LucketTimeFrameIcon from "../LucketTimeFrameIcon";
import Path from "./Path";


const Header = props => (
  <div className="Header">
    <div className="HeaderItemLeft">
      <LucketStepIcon step={props.step} setStep={props.setStep} />
      <LucketTimeFrameIcon timeFrame={props.timeFrame} setTimeFrame={props.setTimeFrame} />
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
