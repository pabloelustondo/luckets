import React, {Component} from 'react'
import './index.css'
import IconClose from "../IconClose";

class LucketTimeFrameIcon extends Component {

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
    this.props.setTimeFrame(v);
}
    
render() {

    let options = ['Day','Week','Month','Season','Year','Life','ALL'];

    return (
    <div className="LucketTimeFrameIcon" 
    onClick={this.edit}> 
    {this.props.timeFrame}
    { (this.state.edit === true)?
         <div>
         <div className="TimeFrameCallout"/>
         <div id="menu" className="TimeFrameMenu">
         {options.filter(
             o => o!==this.props.timeFrame
         ).map( o => 
            <div className="LucketTimeFrameIconShort" 
            onClick={(e) => this.set(e,o)}>{o}</div>
         )}
             <IconClose  edit={this.edit} key={"close"} />
         </div></div>:null }
    </div>)
}
    
}

export default LucketTimeFrameIcon