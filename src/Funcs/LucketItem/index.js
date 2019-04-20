import React from "react";
import "./index.css";
import LucketTitle from "../../Funcs/LucketTitle";
import LucketStatusIcon from "../../Funcs/LucketStatusIcon";
import LucketInfo from "../../Funcs/LucketInfo";
import LucketRelativePointsIcon from "../../Funcs/LucketRelativePointsIcon";
import LucketActionStatusIcon from "../../Funcs/LucketActionStatusIcon";
import LucketCategory from "../../Funcs/LucketCategory";
import LucketIcon from "../../Funcs/LucketIcon";
import LucketSetFocusIcon from "../../Funcs/LucketSetFocusIcon";
import LucketSetParentIcon from "../../Funcs/LucketSetParentIcon";
import LucketForm from './LucketForm'
import LucketEditingItem from '../LucketEditingIcon'
import ChildrenStatusIcon from "../ChildrenStatusIcon"

const LucketItem = props => {

  let className = (props.focus === true) ? "FocusLucketItem" : "LucketItem";
  let isEditing = (props.editingLucket !== null && props.editingLucket.id === props.lucket.id);
  let feature = (props.editingLucket !== null)?props.editingLucket.feature: null;
   
  return (
    <div>
      <div className={className}>
        <div className="ItemLeft">
          <LucketIcon icon={props.lucket.icon} 
          lucket={props.lucket} 
          setEditing={props.setEditing}
          />
          <LucketActionStatusIcon status={props.lucket.actionStatus} 
          lucket={props.lucket}  updateLucket={props.updateLucket} />
          <LucketStatusIcon status={props.lucket.status} 
          lucket={props.lucket} updateLucket={props.updateLucket} />
          <LucketCategory status={props.lucket.actionStatus} 
          lucket={props.lucket}  updateLucket={props.updateLucket} />
        </div>
        <div className="ItemCenter">
          <LucketTitle 
          id={props.lucket.name}  
          lucket={props.lucket} 
          setEditing={props.setEditing}/>
        </div>
        <div className="ItemRigth">
          <LucketRelativePointsIcon
              backToParent={props.backToParent} lucket={props.lucket} 
              focus={props.focus}
              setFocus={() => {props.setFocus(props.lucket);}}
              points="44" totalPoints="77" 
          />
          <ChildrenStatusIcon status="yellow"/>
        </div>
      </div>
      <LucketInfo infoLevel={props.infoLevel} 
      lucket={props.lucket} />

      <LucketForm isEditing={isEditing} 
      setEditing = {props.setEditing}
      feature = {feature}
      lucket={props.lucket} 
      updateLucket={props.updateLucket} />
    </div>
  );
};

export default LucketItem;
