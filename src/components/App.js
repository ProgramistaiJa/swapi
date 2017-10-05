import React, { Component } from 'react';
import './App.css';
import Header from "./Header/index";
import Actors from "./Actors/index";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Actors/>
      </div>
    );
  }
}

export default App;
