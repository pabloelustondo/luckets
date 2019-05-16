import React, {Component} from 'react'
import './index.css'
import LucketsItem from "../LucketItem";

class LucketCategoryView extends Component {

state = {
    show : false
}

toggle = () => {
    if (this.state.show === false){
        this.setState({show:true})
    } else {
        this.setState({show:false})
    }

}

render() {

    const barContent = "Cateogry 3"
    const barClassName='LucketsListChildrenCategoryCategoryView';
    const children = (this.state.show)?this.props.children:null

    return (<div onClick={this.toggle} className="LucketsListChildreCategoryViewn">
        <div className={barClassName} >{barContent}</div>
        {children}
    </div>)
}
    
}

export default LucketCategoryView