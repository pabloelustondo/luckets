import React from "react";
import "./index.css";
import LucketStatusIcon from "../../LucketStatusIcon";
import PlusIcon from "../../PlusIcon";
import MinusIcon from "../../MinusIcon";
import IconSpacer from "../../IconSpacer";
import LucketActionStatusIcon from "../../LucketActionStatusIcon";
import {increaseStatus, decreaseStatus, increaseActionStatus, decreaseActionStatus} from '../../../Models/LuketsModel'

const LucketForm = props => {
  return props.isEditing ? (
<div className="LucketForm">
      <div className="FormItem ItemLeft">
      </div>
      <div className="FormItem">
        <textarea className="FormTextAreaSmall"
        placeholder="Name"
        value={props.lucket.name}       
        onChange={(event) => {
          let lucket = props.lucket;
          lucket.name = event.target.value;
          props.updateLucket(props.lucket)
          }}/>
      </div>
      <div className="FormItem">
        <textarea className="FormTextArea"
        placeholder="Action Plan"
        value={props.lucket.actionPlan}       
        onChange={(event) => {
          let lucket = props.lucket;
          lucket.actionPlan = event.target.value;
          props.updateLucket(props.lucket)
          }}/>
      </div>
      <div className="FormItem">
        <textarea className="FormTextArea"
        placeholder="Description"
        value={props.lucket.description} 
        onChange={(event) => {
          let lucket = props.lucket;
          lucket.description = event.target.value;
          props.updateLucket(props.lucket)
          }}/>
      </div>
      <div className="FormItem">
        <button className="FormButton"
        value='Delete'
        onClick={() => {
          let lucket = props.lucket;
          lucket.deleted = true;
          props.updateLucket(props.lucket)
          }}>Delete</button>
      </div>
      <div>
      </div>
</div>
  ) : null;
};
export default LucketForm;
