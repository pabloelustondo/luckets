import React, {Component} from 'react'
import './index.css'


const colorClass = (color) => 'status-'+color;
const colorFloatClass = (color) => "LucketActionStatusIcon statusfloat-"+ color;

class LucketActionStatusIcon extends Component {
  
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
    }

    render() {    


    let options = ['blue','green','white','yellow','red','purple','black'];


    return (
    <div className={ 'LucketActionStatusIcon ' + colorClass(this.props.status)} 
    onClick={this.edit}>
        
        { (this.state.edit === true)?
         <div>
         <div className="ActionStatusCallout"/>
         <div id="menu" className="ActionStatusMenu">
         {options.filter(
             o => o!==this.props.status
         ).map( o => 
            <div className={'LucketActionStatusIcon ' + colorFloatClass(o)} 
            onClick={(e) => this.set(e,o)} />
         )}
         </div></div>:null }


    </div>
    )
    }

}

export default LucketActionStatusIcon