import React from 'react'
import './index.css'


const colorClass = (color) => 'status-'+color;

const LucketActionStatusIcon = (props) => (
    <div className={ 'LucketActionStatusIcon ' + colorClass(props.status)} ></div>
)

export default LucketActionStatusIcon