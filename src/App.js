import React, { Component } from 'react';
import './App.css';

import Header from './Funcs/Header'
import LucketsList from './Containers/LucketsList'
import Footer from './Funcs/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <LucketsList />
        <Footer />
      </div>
    );
  }
}

export default App;
