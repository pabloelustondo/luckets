import React, {Component} from 'react'
import './index.css'

const colorClass = (color) => "LucketStatusIcon status-"+ color;
class LucketStatusIcon extends Component {

state = {
    edit : false
}

edit = () => {
    debugger;
    if (this.state.edit === false){
        this.setState({edit:true})
    } else {
        this.setState({edit:false}) 
    }

}

set = (event, v) => {
    debugger;
    event.stopPropagation();
    this.setState({edit:false}) 
}
    
render() {

    let options = ['blue','green','white','yellow','red','purple','black'];

    return (<div className={'LucketStatusIcon ' + colorClass(this.props.status)} 
    style={{ backgroundColor: this.props.status }} 
    onClick={this.edit}
     >
    { (this.state.edit === true)?
         <div id="menu" className="Menu">
         {options.filter(
             o => o!==this.props.status
         ).map( o => 
            <div className={'LucketStatusIcon ' + colorClass(o)} 
            onClick={(e) => this.set(e,o)} />
         )}
         </div>:null }
    </div>)
}
    
}

export default LucketStatusIcon