import React, {Component} from 'react'
import './index.css';
import IconClose from '../IconClose'


const colorFloatClass = (color) => "LucketTimeIcon statusfloat-"+ color;

class LucketTime extends Component {
  
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
        lucket.time = v;
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


    let options = ['7','10','13','16','19','22'];


    const timeEditor =  (this.state.edit === true)?
        <div>
        <div className="TimeCallout"/>
        <div id="menu" className="TimeMenu">
        {options.filter(
            o => o!==this.props.status
        ).map( o => 
           <div key={o} className={'LucketTimeIconShort'}
           onClick={(e) => this.set(e,o)} >{o}</div>
        )}

            <IconClose edit={this.edit} key={"close"} />

        </div></div>:null

    return (
    <div className={ 'LucketTimeIcon'}
    onClick={this.edit}>

        { this.props.lucket.time }
        &nbsp;
        {timeEditor}

    </div>
    )
    }

}

export default LucketTime