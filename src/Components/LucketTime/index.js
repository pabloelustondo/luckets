import React, {Component} from 'react'
import './index.css';
import IconClose from '../IconClose'
import {TimeOptions} from '../../Models/LuketsModel';


const colorFloatClass = (color) => "LucketTimeIcon statusfloat-"+ color;

class LucketTime extends Component {
  
    state = {
        edit : false
    }

    
    edit = () => { this.setState({edit:!this.state.edit})}
    
    set = (event, v) => {
        event.stopPropagation();
        let lucket = this.props.lucket;
        const timeType = typeof lucket.time;

        if (timeType !== "object"){
            lucket.time = {};
        }

        lucket.time[v]=(lucket.time[v])?false:true;
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


    let timeOptions = TimeOptions;

    const classForOption = (option, lucket) => {
        if (typeof lucket.time === "object" && lucket.time[option]) {
            return 'LucketTimeIconShort HighligtedTimeIcon';
        } else {
            return 'LucketTimeIconShort';
        }

    }

    const timeEditor =  (this.state.edit === true)?
        <div>
        <div className="TimeCallout"/>
        <div id="menu" className="TimeMenu">
        {timeOptions.map( o =>
           <div key={o} className={classForOption(o, this.props.lucket)} onClick={(e) => this.set(e,o)} > {o} </div>
        )}

            <IconClose edit={this.edit} key={"close"} />

        </div></div>:null

    return (
    <div className={ 'LucketTimeIcon'}
    onClick={this.edit}>

        { 'T' }
        &nbsp;
        {timeEditor}

    </div>
    )
    }

}

export default LucketTime