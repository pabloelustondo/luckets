import React from 'react'
import './index.css'

const LucketForm = (props) => {
  debugger;
  return (
    (props.isEditing) ?
    <div>
    <div className='LucketForm'> Adaption:</div>
      <label>Status</label> <input type="text" defaultValue={props.lucket.status}/> <br/><button>Submit</button>
    </div>

      : null)
}
export default LucketForm