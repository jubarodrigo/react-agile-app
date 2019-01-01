import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './ui/NavBar';

class App extends Component {
  render() {
    const logo = 'Test Dev';
    return (
      <div className="container">
        <NavBar logo={logo}/>
      </div>
    );
  }
}

export default App;
