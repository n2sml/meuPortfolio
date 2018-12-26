import React, { Component } from 'react';
import './App.css';

import Container from './Container.js';

//A classe pai de todas no sistema
//Quase um Object
class App extends Component {
  render() {
    return (
        <Container/>
    );
  }
}

export default App;