import React from "react";
import "./index.css";
import LucketStatusIcon from "../../LucketStatusIcon";
import PlusIcon from "../../PlusIcon";
import MinusIcon from "../../MinusIcon";
import IconSpacer from "../../IconSpacer";

const LucketForm = props => {
  debugger;
  return props.isEditing ? (
<div class="LucketForm">
      <div className="FormItem ItemLeft">
        <input className="FormInputText" type="text"  placeholder="Name"/>
        <IconSpacer />
        <MinusIcon />
        <LucketStatusIcon status="yellow"/>
        <PlusIcon />
        <LucketStatusIcon status="yellow"/>
      </div>
      <div className="FormItem">
        <textarea className="FormTextArea"
        placeholder="Description"       
                  ></textarea>
      </div>
      <div className="FormItem ItemLeft">
        <LucketStatusIcon status="yellow"/>
        <LucketStatusIcon status="yellow"/>
      </div>
      <div>
        <button>Save</button>
      </div>
</div>
  ) : null;
};
export default LucketForm;
