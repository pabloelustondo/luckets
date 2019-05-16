import React, {Component} from 'react'
import './index.css'
import LucketsItem from "../LucketItem";

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
    const barClassName='LucketsListChildrenCategoryCategoryView';
    const children = (this.state.show)?this.props.children:null

    return (<div  className="LucketsListChildreCategoryViewn">
        <div onClick={this.toggle} className={barClassName} >{barContent}</div>
        {children}
    </div>)
}
    
}

export default LucketCategoryView