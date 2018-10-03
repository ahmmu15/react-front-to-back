import React, { Component } from 'react';
import './App.css';

import Header from './Comps/Header'
import Contact from './Comps/Contact'

class App extends Component {
  render() {
    // you can place any js here

    return (
      <div className="App">
        <Header branding="Contact Manager"/>
        <Contact name="John Doe" email="john@gmail.com" phone="555555555"/> 
      </div>
    );
  }
}

export default App;
