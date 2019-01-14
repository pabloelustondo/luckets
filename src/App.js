import React, { Component } from 'react';
import './App.css';

import Header from './FunctionalComponents/Header/Header'
import LucketsList from './Containers/LucketsList/LucketsList'
import Footer from './FunctionalComponents/Footer/Footer';

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
