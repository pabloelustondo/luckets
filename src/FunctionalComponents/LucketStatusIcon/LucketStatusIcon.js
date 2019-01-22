import React from 'react'
import './LucketStatusIcon.css'


const colorClass = (color) => 'status-'+color;

const LucketStatusIcon = (props) => (
    <div className={ 'LucketStatusIcon ' + colorClass(props.status)} ></div>
)

export default LucketStatusIcon