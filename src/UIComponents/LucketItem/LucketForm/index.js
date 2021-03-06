import React from "react";
import "./index.css";
import LucketStatusIcon from "../../LucketStatusIcon";
import PlusIcon from "../../PlusIcon";
import MinusIcon from "../../MinusIcon";
import IconSpacer from "../../IconSpacer";
import LucketActionStatusIcon from "../../LucketActionStatusIcon";
import {increaseStatus, decreaseStatus} from '../../../Logic/LuketsModel'

import LucketIcons from "../../LucketIcons"
import IconClose from "../../IconClose";

const LucketForm = props => {


    const nameEditor = (
        <div className="FormItem">
    <textarea className="FormTextAreaSmall"
              placeholder="Name"
              value={props.lucket.name}
              onChange={(event) => {
                  let lucket = props.lucket;
                  lucket.name = event.target.value;
                  props.updateLucket(props.lucket, props.timeFrame)
              }}/>
            <div className="FormClose">
                <IconClose edit={props.setEditing} key={"close"}/>
            </div>
        </div>
    );

    const actionPlanEditor = (
        <div className="FormItem">
    <textarea className="FormTextArea"
              placeholder="Action Plan"
              value={props.lucket.actionPlan}
              onChange={(event) => {
                  let lucket = props.lucket;
                  lucket.actionPlan = event.target.value;
                  props.updateLucket(props.lucket, props.timeFrame)
              }}/>
        </div>
    )

    const descriptionEditor = (
        <div className="FormItem">
            <textarea className="FormTextArea"
              placeholder="Description"
              value={props.lucket.description}
              onChange={(event) => {
                  let lucket = props.lucket;
                  lucket.description = event.target.value;
                  props.updateLucket(props.lucket, props.timeFrame)
              }}/>
        </div>
    )

    const deleteButton = (
        <div className="FormItem">
            <button className="FormButton"
                    value='Delete'
                    onClick={() => {
                        let lucket = props.lucket;
                        lucket.deleted = true;
                        props.updateLucket(props.lucket, props.timeFrame)
                    }}>Delete
            </button>
        </div>
    )


    return props.isEditing ? (


        <div className="LucketForm">
            <div className="FormItem ItemLeft">
            </div>

            {(props.feature === "full") ? <div>
                {nameEditor}
                {actionPlanEditor}
                {descriptionEditor}
                {deleteButton}</div> : null}

            {(props.feature === "icon") ? <div>

                <LucketIcons updateLucket={props.updateLucket}
                             lucket={props.lucket}
                             setEditing={props.setEditing}
                />

            </div> : null}


            <div>
            </div>
        </div>
    ) : null;
};
export default LucketForm;
