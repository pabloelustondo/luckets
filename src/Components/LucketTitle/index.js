import React from 'react'
import './index.css'

const LucketStatusIcon = (props) => {

    let title = props.id
    if (props.path.length >1){

        const parent = props.path[0].name;
        title = parent + "\\" + title;
    }

    return <div className='LucketTitle'
    onClick={()=>{props.setEditing( {id:props.lucket.id, feature:"full"}  )}} >{title}</div>
}

export default LucketStatusIcon