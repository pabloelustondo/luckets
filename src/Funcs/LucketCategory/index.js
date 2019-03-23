import React, {Component} from 'react'
import './index.css'
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
        lucket.category = v;
        this.props.updateLucket(lucket);
    }

    setPoints = (event, v) => {
        event.stopPropagation();
        if (v==="plus"){
            let lucket = this.props.lucket;
            if (lucket.order && lucket.order < 25){
            lucket.order += 1;
            }
            if (!lucket.order){lucket.order=1}
            this.props.updateLucket(lucket)
        }
        if (v==="minus"){
            let lucket = this.props.lucket;
            if (lucket.order && lucket.order > 1){
                lucket.order -= 1;
            }
            if (!lucket.order){lucket.order=1}
            this.props.updateLucket(lucket)
        }
    }

    render() {    


    let options = ['A','B','C','D','E','F','G','H'];


    const categoryEditor =  (this.state.edit === true)?
        <div>
        <div className="CategoryCallout"/>
        <div id="menu" className="CategoryMenu">
        {options.filter(
            o => o!==this.props.status
        ).map( o => 
           <div key={o} className={'LucketCategoryIcon'} 
           onClick={(e) => this.set(e,o)} >{o}</div>
        )}

        <div key={"minus"} className={'LucketCategoryIcon ' + colorFloatClass("minus")} 
           onClick={(e) => this.setPoints(e,"minus")} >
           <img src="/images/minus.svg" className="CategoryImage" alt="minus.svg" />
           </div>

       <div key={"plus"} className={'LucketCategoryIcon ' + colorFloatClass("plus")} 
           onClick={(e) => this.setPoints(e,"plus")} >
           <img src="/images/add.svg" className="CategoryImage" alt="add.svg" />
           </div>

        <div key={"close"} className={'LucketCategoryIcon ' + colorFloatClass("plus")} 
           onClick={this.edit} >
           <img src="/images/delete.svg" className="CategoryImage" alt="delete.svg" />
           </div>

        </div></div>:null

    return (
    <div className={ 'LucketCategoryIcon'} 
    onClick={this.edit}>

        {this.props.lucket.category}

        {this.props.lucket.order}

        {categoryEditor}

    </div>
    )
    }

}

export default LucketCategory