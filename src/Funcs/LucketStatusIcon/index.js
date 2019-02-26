import React from 'react'
import './index.css'
import { red } from 'ansi-colors';


const colorClass = (color) => 'status-' + color;
const LucketStatusIcon = props => {
    ;
    return (<div className={'LucketStatusIcon ' + colorClass(props.status)} style={{ backgroundColor: props.status }} onClick={() => { }} ></div>)
}
    


export default LucketStatusIcon