import React, { useState } from 'react'
import Login from './Login'
import Register from './Register';
import spidermanImage from './images/spiderman.jpeg';



function Splash() {

  const [showLogin, setShowLogin] = useState(true);
  const [showRegister, setShowRegister] = useState(true);


  return (
    <div>
      <div className='spiderman-container'>
        <img src={spidermanImage} />
      </div>

      <Login />
      <Register />
    </div>
  )
}

export default Splash; 