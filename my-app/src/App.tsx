import React, { useState } from "react";
import "./App.css";
import Splash from "./components/Splash/Splash";
import Show from "./components/Show/Show";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
      hello
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/show/:id" element={<Show />} />
          <Route path="/search" element={<Search />} />
          <Route path="/" element={<Splash />} />
        </Routes>
      </Router>
    </div >
  );
}

export default App;
