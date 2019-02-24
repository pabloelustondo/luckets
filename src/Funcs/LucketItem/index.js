import React from "react";
import "./index.css";
import LucketTitle from "../../Funcs/LucketTitle";
import LucketStatusIcon from "../../Funcs/LucketStatusIcon";
import LucketPointsIcon from "../../Funcs/LucketPointsIcon";
import LucketRelativePointsIcon from "../../Funcs/LucketRelativePointsIcon";
import LucketActionStatusIcon from "../../Funcs/LucketActionStatusIcon";
import LucketIcon from "../../Funcs/LucketIcon";
import LucketSetFocusIcon from "../../Funcs/LucketSetFocusIcon";
import LucketSetParentIcon from "../../Funcs/LucketSetParentIcon";
import { AST_PropAccess } from "terser";
import LucketForm from './LucketForm'
import LucketEditingItem from '../LucketEditingIcon'

const LucketItem = props => {

  let className = (props.focus === true) ? "FocusLucketItem" : "LucketItem";
  let isEditing = (props.editingLucket !== null && props.editingLucket.name === props.lucket.name);
  debugger;
  return (
    <div>
      <div className={className}>
        <div className="ItemLeft">
          <LucketIcon icon={props.lucket.icon} />
          <LucketActionStatusIcon status={props.lucket.actionStatus} />
          <LucketStatusIcon status={props.lucket.status} />
        </div>
        <div className="ItemCenter">
          <LucketTitle id={props.lucket.name}  lucket={props.lucket} setEditing={props.setEditing}/>
        </div>
        <div className="ItemRigth">
          <LucketPointsIcon points={props.lucket.points} />
          <LucketRelativePointsIcon points="44" totalPoints="77" />
          {props.focus === true ? (
            <LucketSetParentIcon backToParent={props.backToParent} lucket={props.lucket} />
          ) : (
              <LucketSetFocusIcon
                focus={props.focus}
                setFocus={() => {
                  props.setFocus(props.lucket);
                }}
              />
            )}
        </div>
      </div>
      <LucketForm isEditing={isEditing} lucket={props.lucket}/>
    </div>
  );
};

export default LucketItem;
