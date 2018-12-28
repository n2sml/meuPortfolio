import React, { Component } from 'react';
import './App.css';

import MeuContainer from './MeuContainer.js';

//A classe pai de todas no sistema
//Quase um Object
class App extends Component {
  render() {
    return (
        <MeuContainer/>
    );
  }
}

export default App;
