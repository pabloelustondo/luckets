import React from "react";
import "./index.css";
import LucketTitle from "../LucketTitle";
import LucketStatusIcon from "../LucketStatusIcon";
import LucketInfo from "../LucketInfo";
import LucketRelativePointsIcon from "../LucketRelativePointsIcon";
import LucketActionStatusIcon from "../LucketActionStatusIcon";
import LucketCategory from "../LucketCategory";
import LucketIcon from "../LucketIcon";
import LucketSetFocusIcon from "../LucketSetFocusIcon";
import LucketSetParentIcon from "../LucketSetParentIcon";
import LucketForm from './LucketForm'
import LucketEditingItem from '../LucketEditingIcon'
import ChildrenStatusIcon from "../ChildrenStatusIcon"
import {getPath} from "../../Logic";

const LucketItem = props => {

    let className = (props.focus === true) ? "FocusLucketItem" : "LucketItem";
    let isEditing = (props.editingLucket !== null && props.editingLucket.id === props.lucket.id);
    let feature = (props.editingLucket !== null) ? props.editingLucket.feature : null;
    let path = getPath(props.luckets || [],props.lucket);

    return (
        <div>
            <div className={className}>
                <div className="ItemLeft">

                    <LucketIcon icon={props.lucket.icon}
                                lucket={props.lucket}
                                setEditing={props.setEditing}
                    />

                    <LucketCategory status={props.lucket.actionStatus}    timeFrame={props.timeFrame}
                                    lucket={props.lucket} updateLucket={props.updateLucket}/>


                    <LucketStatusIcon status={props.lucket.status}
                                      lucket={props.lucket} updateLucket={props.updateLucket}/>

                    <LucketActionStatusIcon status={props.lucket.actionStatus} timeFrame={props.timeFrame}
                                            lucket={props.lucket} updateLucket={props.updateLucket}/>

                    <ChildrenStatusIcon status={props.lucket.childrenStatus}/>

                    <LucketRelativePointsIcon
                        backToParent={props.backToParent} lucket={props.lucket}
                        focus={props.focus}
                        lucket={props.lucket}
                        setFocus={() => {
                            props.setFocus(props.lucket);
                        }}
                    />
                    <LucketTitle
                        id={props.lucket.name || "---" }
                        path={path}
                        focus={props.focus}
                        lucket={props.lucket}
                        setEditing={props.setEditing}/>

                </div>
            </div>
            <LucketInfo
                focus={props.focus}
                timeFrame={props.timeFrame}
                status={props.lucket.actionStatus}
                updateLucket={props.updateLucket}
                lucket={props.lucket}
                setEditing={props.setEditing}
                infoLevel={props.infoLevel}
                lucket={props.lucket}/>

            <LucketForm isEditing={isEditing}
                        setEditing={props.setEditing}
                        feature={feature}
                        lucket={props.lucket}
                        updateLucket={props.updateLucket}/>
        </div>
    );
};

export default LucketItem;
