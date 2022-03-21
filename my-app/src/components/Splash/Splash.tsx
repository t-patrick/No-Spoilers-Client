import React, { useState } from 'react'
import Login from './Login'
import Register from './Register';
import StyledSplash from './Splash.styled';


function Splash() {

  const [showLogin, setShowLogin] = useState(true);
  const [showRegister, setShowRegister] = useState(true);


  return (
    <StyledSplash>
      <Login />
      {/* <Register /> */}
    </StyledSplash>
  )
}

export default Splash; 