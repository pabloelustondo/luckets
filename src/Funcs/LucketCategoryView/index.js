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

    return (<div className="LucketsListChildreCategoryViewn">
        <div className='LucketsListChildrenCategoryCategoryView' >Category 2</div>
        {this.props.children};
    </div>)
}
    
}

export default LucketCategoryView