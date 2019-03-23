import React, {Component} from 'react'
import './index.css'


const colorClass = (color) => 'status-'+color;
const colorFloatClass = (color) => "LucketCategoryIcon statusfloat-"+ color;

class LucketCategory extends Component {
  
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
        this.setState({edit:false});
        let lucket = this.props.lucket;
        lucket.actionStatus = v;
        this.props.updateLucket(lucket);
    }

    setPoints = (event, v) => {
        event.stopPropagation();
        if (v==="plus"){
            let lucket = this.props.lucket;
            if (lucket.points < 25){
            lucket.points += 1;
            this.props.updateLucket(lucket)
            }
        }
        if (v==="minus"){
            let lucket = this.props.lucket;
            if (lucket.points > 1){
                lucket.points -= 1;
                this.props.updateLucket(lucket)
            }
        }
    }

    render() {    


    let options = ['blue','green','white','yellow','red','purple','black'];


    return (
    <div className={ 'LucketCategoryIcon ' + colorClass(this.props.status)} 
    onClick={this.edit}>
        {this.props.lucket.points}
        
        { (this.state.edit === true)?
         <div>
         <div className="CategoryCallout"/>
         <div id="menu" className="CategoryMenu">
         {options.filter(
             o => o!==this.props.status
         ).map( o => 
            <div key={o} className={'LucketCategoryIcon ' + colorFloatClass(o)} 
            onClick={(e) => this.set(e,o)} />
         )}

         <div key={"minus"} className={'LucketCategoryIcon ' + colorFloatClass("minus")} 
            onClick={(e) => this.setPoints(e,"minus")} >
            <img src="/images/minus.svg" className="CategoryImage" alt="minus.svg" />
            </div>

        <div key={"plus"} className={'LucketCategoryIcon ' + colorFloatClass("plus")} 
            onClick={(e) => this.setPoints(e,"plus")} >
            <img src="/images/add.svg" className="CategoryImage" alt="add.svg" />
            </div>

         </div></div>:null }


    </div>
    )
    }

}

export default LucketCategory