import React, { Component } from 'react';
import './index.css';

import axios from 'axios'

import LucketsItem from  '../../Funcs/LucketItem';

class LucketsList extends Component {

  state = {luckets:{}};

  componentDidMount = () => {
    axios.get("https://luckets-5fbb4.firebaseio.com/luckets.json").then( 
      response => 
    {
        this.setState({  luckets:response.data });
    }).catch(
        err => {
            this.setState({
                error: err
            })
            alert(err)}
    )

}


  render() {
    return (
    <div className='LucketsList'>
    { Object.keys(this.state.luckets).map(  key => <LucketsItem key={key} id={key}></LucketsItem>  ) }
    </div>);
  }
}

export default LucketsList;