import React, { Component } from 'react';
import './App.css';

import ApiCredits from './components/ApiCredits';

class App extends Component {
  render() {
    return (
      <div className="app">
        <ApiCredits/>
      </div>
    );
  }
}

export default App;
