import React, { Component } from 'react';
import './App.css';

import LucketsList from './Containers/LucketsList'
import Footer from './Funcs/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LucketsList />
      </div>
    );
  }
}

export default App;
