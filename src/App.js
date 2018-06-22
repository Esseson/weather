import React, { Component } from 'react';
import './App.css';
import firebase from "firebase";


// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBKSCJVzjigj2DBPapdW6OF_o2DEl3Jy-o",
    authDomain: "weather-app-ddb2e.firebaseapp.com",
    databaseURL: "https://weather-app-ddb2e.firebaseio.com",
    projectId: "weather-app-ddb2e",
    storageBucket: "weather-app-ddb2e.appspot.com",
    messagingSenderId: "176332150030"
  };
  firebase.initializeApp(config);


class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
        <div>
          <div>
<p>
  <h1>Weather application</h1>
</p>
          </div>
          <h3>Email Address</h3>
          <input></input>
          <div>
          <button>Submit</button>
        </div>
          <div>
            <p>
              <h3>Location</h3>
              </p>
            <input></input>
            <div>
            <button>Submit</button>
          </div>
          </div>
        </div>
        </p>
      </div>
    );
  }
}

export default App;
