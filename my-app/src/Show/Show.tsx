import React from 'react'
import Navbar from '../Navbar/Navbar';
import Backintime from './Backintime';
import Episodechooser from './Episodechooser';
import Forum from './Forum/Forum';

function Show() {
  return (
    <div>
      <Navbar/>

      <div>
        Some TV shows details ...
      </div>

      <Backintime/>

      <Episodechooser/>

      <Forum/>

    </div>
  )
}

export default Show;