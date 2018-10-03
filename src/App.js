import React, { Component } from 'react';

import Header from './Comps/Header'
import Contact from './Comps/Contact'

import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  render() {
    // you can place any js here

    return (
      <div className="App">
        <Header branding="Contact Manager"/>
        <div className="container">
          <Contact name="John Doe" email="john@gmail.com" phone="555555555"/> 
        </div>
      </div>
    );
  }
}

export default App;
