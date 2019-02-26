import React, { Component } from "react";
import "./App.css";

import LucketsList from "./Containers/LucketsList";
import firebase from "firebase";
import { StyledFirebaseAuth } from "react-firebaseui";

firebase.initializeApp({
  apiKey : "AIzaSyAu-HXBAYHQOxksCHplaz9JbbvJdrgVOGY",
  authDomain: "luckets-5fbb4.firebaseapp.com"
});

class App extends Component {
  state = { signedIn: false ,
            user: null};


  signOut = () => {
    debugger;
    this.setState({ signedIn: false, user: null });
    firebase.auth().signOut().then(function() {
      alert("Signed out")
    }).catch(function(error) {
      alert("Signing out ERROR "+ error);
    });

  }          

  uiConfig = {
    signInFlow: "popup",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccess: () => false
    }
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      debugger;
      if (user !== null){
        this.setState({ signedIn: user.I, user: user });
      } else {
        this.setState({ signedIn: false, user: null });
      }

    });

  };

  render() {
    return (
      <div className="App">
        {this.state.signedIn ? (
          <LucketsList user={this.state.user} signOut={this.signOut}/>
        ) : (<StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />)}
      </div>
    );
  }
}

export default App;
