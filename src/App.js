import React, { Component } from 'react';

import Header from './Comps/Header'
import Contacts from './Comps/Contacts'

import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  render() {
    // you can place any js here

    return (
      <div className="App">
        <Header branding="Contact Manager"/>
        <div className="container">
          <Contacts /> 
        </div>
      </div>
    );
  }
}

export default App;
