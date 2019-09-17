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

  </div>
);

export default Header;
