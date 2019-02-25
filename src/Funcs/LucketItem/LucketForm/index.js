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
        <input className="FormInputText" type="text" value={props.lucket.name} 
        onChange={(event) => {
          let lucket = props.lucket;
          lucket.name = event.target.value;
          props.updateLucket(props.lucket)
          }}/>
        <IconSpacer />
        <MinusIcon onClick={()=>{
          let lucket = props.lucket;
          lucket.status = decreaseStatus(props.lucket)
          props.updateLucket(props.lucket)
          }}/>
        <LucketStatusIcon lucket={props.lucket} status={props.lucket.status}/>
        <PlusIcon onClick={()=>{
          let lucket = props.lucket;
          lucket.status = increaseStatus(props.lucket)
          props.updateLucket(props.lucket)
          }} />
      </div>
      <div className="FormItem">
        <textarea className="FormTextArea"
        value={props.lucket.description} onChange={(event) => {
          let lucket = props.lucket;
          lucket.description = event.target.value;
          props.updateLucket(props.lucket)
          }}      
                  ></textarea>
      </div>
      <div className="FormItem ItemLeft">
        <MinusIcon onClick={()=>{
          let lucket = props.lucket;
          lucket.actionStatus = decreaseActionStatus(props.lucket)
          props.updateLucket(props.lucket)
          }} />
        <LucketActionStatusIcon status={props.lucket.actionStatus}/>
        <PlusIcon onClick={()=>{
          let lucket = props.lucket;
          lucket.actionStatus = increaseActionStatus(props.lucket)
          props.updateLucket(props.lucket)
          }}/>
        <IconSpacer />
        <MinusIcon onClick={(event) => {
          let lucket = props.lucket;
          lucket.points = lucket.points - 1;
          props.updateLucket(props.lucket)
          }} />
        <input className="FormInputPoints" value={props.lucket.points} type="text" onChange={(event) => {
          let lucket = props.lucket;
          lucket.points = event.target.value;
          props.updateLucket(props.lucket)
          }}   />
        <PlusIcon onClick={(event) => {
          let lucket = props.lucket;
          lucket.points = lucket.points + 1;
          props.updateLucket(props.lucket)
          }} />
      </div>
      <div className="FormItem">
        <textarea className="FormTextArea"
        value={props.lucket.actionPlan}       
        onChange={(event) => {
          let lucket = props.lucket;
          lucket.actionPlan = event.target.value;
          props.updateLucket(props.lucket)
          }}   ></textarea>
      </div>
      <div>
      </div>
</div>
  ) : null;
};
export default LucketForm;
