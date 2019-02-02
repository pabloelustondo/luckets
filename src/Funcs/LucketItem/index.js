import React from "react";
import "./index.css";
import LucketTitle from "../../Funcs/LucketTitle";
import LucketStatusIcon from "../../Funcs/LucketStatusIcon";
import LucketPointsIcon from "../../Funcs/LucketPointsIcon";
import LucketRelativePointsIcon from "../../Funcs/LucketRelativePointsIcon";
import LucketActionStatusIcon from "../../Funcs/LucketActionStatusIcon";
import LucketIcon from "../../Funcs/LucketIcon";
import LucketSetFocusIcon from "../../Funcs/LucketSetFocusIcon";

const LucketItem = props => {
  console.log(props);
  let classNames = "LucketItem";
  if (props.focus === true) {
    classNames += " FocusBackgroundColor";
  }
  return (
    <div className={classNames}>
      <div className="ItemLeft">
        <LucketIcon icon={props.lucket.icon} />
        <LucketActionStatusIcon status={props.lucket.actionStatus} />
        <LucketStatusIcon status={props.lucket.status} />
      </div>
      <div className="ItemCenter">
        <LucketTitle id={props.lucket.name} />
      </div>
      <div className="ItemRigth">
        <LucketPointsIcon points={props.lucket.points} />
        <LucketRelativePointsIcon points="44" totalPoints="77" />
        <LucketSetFocusIcon
          backToLife={() => {
            props.backToLife();
          }}
          setFocus={() => {
            props.setFocus(props.lucket);
          }}
          currentLucket={props.lucket}
          focus={props.focus}
        />
      </div>
    </div>
  );
};

export default LucketItem;
