import React from 'react'
import './LucketActionStatusIcon.css'


const colorClass = (color) => 'status-'+color;

const LucketActionStatusIcon = (props) => (
    <div className={ 'LucketActionStatusIcon ' + colorClass(props.status)} ></div>
)

export default LucketActionStatusIcon