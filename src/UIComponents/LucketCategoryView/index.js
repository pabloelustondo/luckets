import React, {Component} from 'react'
import './index.css'
import LucketsItem from "../LucketItem";
import ChildrenStatusIcon from "../ChildrenStatusIcon";
import LucketRelativePointsIcon from "../LucketRelativePointsIcon";

class LucketCategoryView extends Component {

state = {
    show : true
}

toggle = () => {
    if (this.state.show === false){
        this.setState({show:true})
    } else {
        this.setState({show:false})
    }

}

render() {

    const barContent = this.props.category.category;
    const barClassName='LucketsListChildrenCategoryCategoryView ItemLeft';
    const children = (this.state.show)?this.props.children:null

    return (<div  className="LucketsListChildreCategoryViewn">
        <div onClick={this.toggle} className={barClassName} >
            <div className='CategoryName'>{barContent}</div>
            <ChildrenStatusIcon status={this.props.category.childrenStatus}/>

            <LucketRelativePointsIcon
                backToParent={this.props.category} lucket={this.props.category}
                focus={false}
                lucket={this.props.category}
                setFocus={() => {
                    this.props.setFocus(this.props.category);
                }}
            />
        </div>
        {children}
    </div>)
}
    
}

export default LucketCategoryView