import React from 'react'
import { useSelector } from 'react-redux';

function Navbar() {

  const isLoggedIn = useSelector<MainState>(state => state.user.isLoggedIn);


  return (
    isLoggedIn ? <div>logged in - navbar showing</div> : <div>Not Logged In</div>
  )
}

export default Navbar;