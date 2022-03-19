import React, { useState } from "react";
import "./App.css";
import Splash from "./components/Splash/Splash";
import Show from "./components/Show/Show";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Search from "./components/search/Search";

/* 
  Redux store create here.
  Router:
    1. Splash
    2. Home
    3. 
*/

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/splash">
            <Splash />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/show/:id">
            <Show />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
