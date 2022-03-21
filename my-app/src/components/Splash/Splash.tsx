import React, { useState } from 'react'
import Login from './Login'
import Register from './Register';
import StyledSplash from './Splash.styled';
import Forum from '../Forum/Forum';


function Splash() {

  const [showLogin, setShowLogin] = useState(true);
  const [showRegister, setShowRegister] = useState(true);


  return (
    <StyledSplash>
      <Forum />
      {/* <Login />
      <Register /> */}
    </StyledSplash>
  )
}

export default Splash; 