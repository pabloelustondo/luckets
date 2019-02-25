import React from "react";
import "./index.css";
import LucketStatusIcon from "../../LucketStatusIcon";
import PlusIcon from "../../PlusIcon";
import MinusIcon from "../../MinusIcon";
import IconSpacer from "../../IconSpacer";
import LucketActionStatusIcon from "../../LucketActionStatusIcon";

const LucketForm = props => {
  ;
  return props.isEditing ? (
<div className="LucketForm">
      <div className="FormItem ItemLeft">
        <input className="FormInputText" type="text"  placeholder="Name" 
        onChange={(event) => {
          let lucket = props.lucket;
          lucket.name = event.target.value;
          props.updateLucket(props.lucket)
          }}/>
        <IconSpacer />
        <MinusIcon />
        <LucketStatusIcon status="yellow"/>
        <PlusIcon />
      </div>
      <div className="FormItem">
        <textarea className="FormTextArea"
        placeholder="Description"       
                  ></textarea>
      </div>
      <div className="FormItem ItemLeft">
        <MinusIcon />
        <LucketActionStatusIcon status="yellow"/>
        <PlusIcon />
        <IconSpacer />
        <MinusIcon />
        <input className="FormInputPoints" type="text"  placeholder="1"/>
        <PlusIcon />
      </div>
      <div className="FormItem">
        <textarea className="FormTextArea"
        placeholder="Day Action Plan"       
                  ></textarea>
      </div>
      <div>
        <button>Save</button>
      </div>
</div>
  ) : null;
};
export default LucketForm;
