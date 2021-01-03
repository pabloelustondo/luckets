import React, { Component } from "react";
import "./App.css";
import {store, REDUCER} from './Store/LucketsStore';
import LucketsList from "./Containers/LucketsList";
import firebase from "firebase";
import { StyledFirebaseAuth } from "react-firebaseui";
import {
  checkUser,
  getUserInfo,
  getHistory,
  postUserInfo
} from "./Data/DataService";

import {
cleanActionStatus
} from "./Logic/LuketsModel";

firebase.initializeApp({
  apiKey: "AIzaSyAu-HXBAYHQOxksCHplaz9JbbvJdrgVOGY",
  authDomain: "luckets-5fbb4.firebaseapp.com",
  name:"luckets"
});

class App extends Component {
  state = {
    signedIn: false,
    luckets: null,
    step: "Do",
    timeFrame: "Day",
    user: null,
    openDay: null,
  };

  signOut = () => {
    this.setState({ signedIn: false, user: null });
    firebase
      .auth()
      .signOut()
      .then(function() {})
      .catch(function(error) {
        alert(error);
      });
  };

  setCleanToDoList = () => {

    const cleanLuckets = cleanActionStatus(this.state.luckets, this.state.timeFrame);
    this.setState( {luckets: cleanLuckets});

  };

  setDayToToday = () => {
    const userInfo = this.state.userInfo;
    userInfo.openDay = new Date();
    this.setState({ userInfo: userInfo });
    postUserInfo(this.state.user, userInfo);
  };

  uiConfig = {
    signInFlow: "popup",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccess: () => false
    }
  };

  setLuckets = luckets => {
    this.setState({ luckets: luckets });
  };

  setUserInfo = userInfo => {
    if (userInfo === null) {
      userInfo = {openDay: new Date()};
      postUserInfo(this.state.user, userInfo)
    }
    const openDay = new Date(userInfo.openDay);
    userInfo.openDay = openDay;
    this.setState( { userInfo:userInfo  } )
  }


  setHistory = history => {
    this.setState( { history:history } )
  }

  setOpenDay = openDay => {
    this.setState({ openDay: openDay});
  };

  componentDidMount = () => {

    //TESTING CODE TO TRY TO REDUX STORE
    console.log("SUBSCRIBING TO STORE");
//    store.subscribe( () =>
//        {
//        console.log("NEW STORE DATA");
//        console.log(store.getState());
//        });

  //  setInterval(() => store.dispatch({type:'REDUCER', reducer:REDUCER.dummy}) , 1000);

    //

    firebase.auth().onAuthStateChanged(user => {
      if (user !== null) {
        // HERE IS WHEN WE HAVE THE USER
        this.setState({ signedIn: user.I, user: user });
        // CALL GET DATA
        checkUser(user, this.setLuckets);
        getUserInfo(user,this.setUserInfo);
        getHistory(user,this.setHistory);
      } else {
        this.setState({ signedIn: false, user: null });
      }
    });
  };

  setStep = newStep => {
    this.setState({ step: newStep });
  };

  setTimeFrame = newTimeFrame => {
    this.setState({ timeFrame: newTimeFrame });
  };

  componentWillMount(){
    document.title = "Luckets"
  }

  render() {
    return (
      <div className="App">
        {this.state.signedIn ? (
          <LucketsList
            setStep={this.setStep}
            setTimeFrame={this.setTimeFrame}
            step={this.state.step}
            timeFrame={this.state.timeFrame}
            userInfo={this.state.userInfo}
            user={this.state.user}
            luckets={this.state.luckets}
            setLuckets={this.setLuckets}
            setOpenDay={this.setOpenDay}
            signOut={this.signOut}
            setDayToToday={this.setDayToToday}
            setCleanToDoList={this.setCleanToDoList}
          />
        ):null}
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
      </div>
    );
  }
}

export default App;
