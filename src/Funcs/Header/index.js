import React from "react";
import "./index.css";
import AddLucketIcon from "../AddLucketIcon";
import LucketStepIcon from "../LucketStepIcon";
import LucketTimeFrameIcon from "../LucketTimeFrameIcon";
import LucketOpenDay from "../LucketOpenDay";
import LucketDoneButton from "../LucketDoneButton";

import Path from "./Path";

const Header = props => (
  <div className="Header">
      <LucketStepIcon step={props.step} setStep={props.setStep} />
      <LucketTimeFrameIcon
        timeFrame={props.timeFrame}
        setTimeFrame={props.setTimeFrame}
      />
      <LucketOpenDay userInfo={props.userInfo} />
      <Path luckets={props.luckets} focusLucket={props.focusLucket} />

    <div className="HeaderItemRigth">
      {props.step === "Close" ? <LucketDoneButton 
        user={props.user} 
        postHistory={props.postHistory}
      /> : null}
      {props.step === "Plan" ? (
        <AddLucketIcon addLucket={props.addLucket} />
      ) : null}
    </div>
  </div>
);

export default Header;
