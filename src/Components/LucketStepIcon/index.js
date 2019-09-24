import React, {Component} from 'react'
import './index.css'
import IconClose from "../IconClose";

class LucketStepIcon extends Component {

state = {
    edit : false
}

edit = () => {
    if (this.state.edit === false){
        this.setState({edit:true})
    } else {
        this.setState({edit:false}) 
    }

}

set = (event, v) => {
    event.stopPropagation();
    this.setState({edit:false}) 
    this.props.setStep(v);
}
    
render() {

    let options = ['Feel','Plan','Time','Do','Close','Review'];

    return (
    <div className="LucketStepIcon" 
    onClick={this.edit}> 
    {this.props.step}
    { (this.state.edit === true)?
         <div>
         <div className="StepCallout"/>
         <div id="menu" className="StepMenu">
         {options.filter(
             o => o!==this.props.status
         ).map( o => 
            <div className="LucketStepIconShort" 
            onClick={(e) => this.set(e,o)}>{o}</div>
         )}
             <IconClose  edit={this.edit} key={"close"} />
         </div>
         </div>:null }

    </div>)
}
    
}

export default LucketStepIcon