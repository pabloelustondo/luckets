import React, {Component} from 'react'
import './index.css'

const colorClass = (color) => "ChildrenStatusIcon status-"+ color;
class ChildrenStatusIcon extends Component {

handleClick = () => {
    alert("handle children statuw icon");
}
 
render() {
    return <div className={'ChildrenStatusIcon ' + colorClass(this.props.status)} 
    onClick={this.handleClick}/>
}
    
}

export default ChildrenStatusIcon