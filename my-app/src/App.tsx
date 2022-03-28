import React, { createContext, Fragment, useEffect, useState } from 'react';
import './App.css';
import Splash from './components/Splash/Splash';
import Show from './components/Show/Show';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Search from './components/search/Search';
import GlobalStyles from './theme/global-style';
import { bindActionCreators, createStore } from 'redux';
import reducers from './state/reducers';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { CurrentShowContextType, ForumContextType } from './proptypes';
import Profile from './components/Profile/Profile';
import { verifyTokenAndLogin } from './API/user-api';
import { UserActionCreators } from './state/action-creators';
import Sidebar from '../src/components/Sidebar/Sidebar';

const store = createStore(reducers, composeWithDevTools());

export const CurrentShowContext = createContext<CurrentShowContextType>(
  {} as CurrentShowContextType
);

export const ForumContext = createContext<ForumContextType>(
  {} as ForumContextType
);

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <GlobalStyles />
        <div className="App">
          <Router>
            <Routes>
              <Route path="home" element={<Home />} />
              <Route path="show/:id" element={<Show />} />
              <Route path="search" element={<Search />} />
              <Route path="/" element={<Splash />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Router>
        </div>
      </Fragment>
    </Provider>
  );
}

export default App;
