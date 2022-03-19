import React from 'react'
import Navbar from '../Navbar/Navbar';
import Reel from './Reel';

function Home() {
  return (
    <div>
      <Navbar/>

      <div>
        <input type="text"  placeholder='Filter the lists below...'></input>
      </div>
      
      <div>
        <div>On the go</div>
        <Reel/>
      </div>

      <div>
        <div>Completed</div>
        <Reel/>
      </div>

    </div>
  )
}

export default Home;