import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Weather app Rwanda</h1>
        </header>
        <p className="App-intro">
        <div>
          <h3>Email Address</h3>
          <input></input>
          <button>Submit</button>
          <div>
            <p>
              <h3>Location</h3>
              </p>
            <input></input>
            <button>Submit</button>
          </div>
        </div>
        </p>
      </div>
    );
  }
}

export default App;
