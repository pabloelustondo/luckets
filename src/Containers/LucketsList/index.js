import React, { Component } from "react";
import "./index.css";
import LucketsItem from "../../Funcs/LucketItem";
import FocusLucket from "../../Funcs/FocusLucket";
import Header from "../../Funcs/Header";
import Footer from "../../Funcs/Footer";
import { getData } from "../../Data/DataService"

import { getRootLucket, getChildrenLuckets, getParentLucket, getNewLucket, updateLucket}  from "../../Models/LuketsModel";

class LucketsList extends Component {
  state = { 
    luckets: [], 
    focusLucket: null,
    editing: null
};

  setFocus = (lucket) => {
    this.setState({focusLucket: lucket}) 
  }

  updateLucket = (lucket) => {
    ;
    let newLuckets = this.state.luckets.map( l => {
      if (l.id === lucket.id) {
        return lucket
      } else {
        return l
      }
    })
    this.setState({ luckets: newLuckets}) 
  }

  setEditing = (lucket) => {
    let editingObj = this.state.editing;
    if( editingObj != null && editingObj.name == lucket.name){
      this.setState({editing: null}) 
    }
    else{this.setState({editing: lucket}) }
  }
 
  backToParent = () => {
    ;
    let newFocusLucket = getParentLucket(this.state.luckets, this.state.focusLucket);
    this.setState( { focusLucket: newFocusLucket }  )
  }

  addLucket = () => {
    ;
    const newLucket = getNewLucket( this.state.focusLucket );
    this.setState( { focusLucket: newLucket }  )
  }

  componentDidMount = () => {
    getData( (luckets, focusLucket) => { this.setState({ luckets, focusLucket }) } )
  };

  render() {

    var focusLucket = (this.state.focusLucket == null )?getRootLucket(this.state.luckets): this.state.focusLucket
    var childrenLucket = getChildrenLuckets(this.state.luckets, focusLucket);
    ;
   return(
      <div className="LucketsList" >
        <Header addLucket={this.addLucket} user={this.props.user} signOut={this.props.signOut} />
        <FocusLucket editingLucket={this.state.editing}  lucket={focusLucket} 
        backToParent={this.backToParent} setEditing={this.setEditing}   updateLucket={this.updateLucket}/>
        <div className="LucketsListChildren">
          {childrenLucket.map(lucket => (
            <LucketsItem editingLucket={this.state.editing} lucket={lucket} key={lucket.name} 
            setEditing={this.setEditing} setFocus={this.setFocus}  
            updateLucket={this.updateLucket}
            />
          ))}
        </div>
        <Footer />
      </div>
   )
  }
}

export default LucketsList;
