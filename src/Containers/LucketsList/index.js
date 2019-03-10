import React, { Component } from "react";
import "./index.css";
import LucketsItem from "../../Funcs/LucketItem";
import FocusLucket from "../../Funcs/FocusLucket";
import Header from "../../Funcs/Header";
import Footer from "../../Funcs/Footer";
import {postData, getData} from "../../Data/DataService"

import { getRootLucket, getChildrenLuckets, getParentLucket, getNewLucket, updateLucket}  from "../../Models/LuketsModel";

class LucketsList extends Component {
  state = { 
    focusLucket: null,
    editing: null
};


  setFocus = (lucket) => {
    this.setState({focusLucket: lucket}) 
  }

  updateLucket = (lucket) => {
    let newLuckets = this.props.luckets.map( l => {
      if (l.id === lucket.id) {
        return lucket
      } else {
        return l
      }
    })
    this.props.setLuckets(newLuckets);
    postData(this.props.user, lucket, () => {})
  }

  setEditing = (lucket) => {
    let editingObj = this.state.editing;
    if( editingObj != null && editingObj.name === lucket.name){
      this.setState({editing: null}) 
    }
    else{this.setState({editing: lucket}) }
  }
 
  backToParent = () => {
    if (this.state.focusLucket && this.state.focusLucket.parent !== null ){
    let newFocusLucket = getParentLucket(this.props.luckets, this.state.focusLucket);
    this.setState( { focusLucket: newFocusLucket }  )}
  }

  addLucket = () => {
    const newLucket = getNewLucket( this.state.focusLucket );
    this.setState( { focusLucket: newLucket }  )
  }

  render() {

    let focusLucket=null;
    let childrenLucket=[];
      
    if (this.props.luckets){
      ;
    focusLucket= (this.state.focusLucket == null )?getRootLucket(this.props.luckets): this.state.focusLucket
    childrenLucket= getChildrenLuckets(this.props.luckets, focusLucket);
    }
  
    return(
      <div className="LucketsList" >
        <Header addLucket={this.addLucket} user={this.props.user} signOut={this.props.signOut} />
        <FocusLucket editingLucket={this.state.editing}  lucket={focusLucket} 
        backToParent={this.backToParent} setEditing={this.setEditing}   updateLucket={this.updateLucket}/>
        <div className="LucketsListChildren">
          {childrenLucket.map(lucket => (
            <LucketsItem editingLucket={this.state.editing} lucket={lucket} key={lucket.id} 
            setEditing={this.setEditing} setFocus={this.setFocus}  
            updateLucket={this.updateLucket}
            />
          ))}
        </div>
        <Footer user={this.props.user} 
          signOut={this.props.signOut}
        />
      </div>
   )
  }
}

export default LucketsList;
