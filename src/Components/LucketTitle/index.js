import React from 'react'
import './index.css'

const LucketTitle = (props) => {

    const focusid = (props.focus)? props.focus.id : null;
    let title = props.id
    if (props.path.length >1){

        const parent = props.path[0].name;
        if (parent !== focusid){
             title = parent + "\\" + title;
        }
    }

    return <div className='LucketTitle'
    onClick={()=>{props.setEditing( {id:props.lucket.id, feature:"full"}  )}} >{title}</div>
}

export default LucketTitle