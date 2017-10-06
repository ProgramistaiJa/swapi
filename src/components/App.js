import React, { Component } from 'react';
import {
        BrowserRouter as Router,
        Route
        } from 'react-router-dom'
import './App.css';
import Header from "./Header/index";
import Actors from "./Actors/index";
import Pages from "./Pages/index";

class App extends Component {
  render() {
    return (
      <Router>
          <div className="App">
              <Header/>
              <Pages/>





            <Route exact path="/actors/" component={Actors}/>
            <Route path="/actors/:pageId" component={Actors}/>

          </div>
      </Router>
    );
  }
}

export default App;
