import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} alt="logo"/>
        </div>
        <p className="App-intro">
          <h2>Realizado por:</h2>
          <h4>Sebastian Londoño Alvarez</h4>
          <h4>David Alexander Parra Valencia</h4>
          <h4>Johan Alberto Marin Bustamante</h4>
          <h4>Juan David Sanchez</h4>
        </p>
      </div>
    );
  }
}

export default App;
