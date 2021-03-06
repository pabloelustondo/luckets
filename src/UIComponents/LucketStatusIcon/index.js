import React, {Component} from 'react'
import './index.css'
import IconClose from "../IconClose";

const colorClass = (color) => "LucketStatusIcon status-"+ color;
const colorFloatClass = (color) => "LucketStatusIcon statusfloat-"+ color;
class LucketStatusIcon extends Component {

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
    let lucket = this.props.lucket;
    lucket.status = v;
    this.props.updateLucket(lucket);
}
    
render() {

    let options = ['blue','green','white','yellow','red','purple','black'];

    return (
    <div className={'LucketStatusIcon ' + colorClass(this.props.status)} 
    style={{ backgroundColor: this.props.status }} 
    onClick={this.edit}> 
    { (this.state.edit === true)?
         <div>
         <div className="StatusIconCallout"/>
         <div id="menu" className="StatusIconMenu">
         {options.filter(
             o => o!==this.props.status
         ).map( o => 
            <div className={'LucketStatusIconShort ' + colorFloatClass(o)} 
            onClick={(e) => this.set(e,o)} />
         )}
         <IconClose edit={this.edit} key={"close"} />
         </div></div>:null }
    </div>)
}
    
}

export default LucketStatusIcon