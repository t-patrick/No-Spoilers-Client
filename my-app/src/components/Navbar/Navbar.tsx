import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { loginUser, registerUser } from '../../API/user-api';
import { NavbarProps } from '../../proptypes';
import { UserActionCreators } from '../../state/action-creators';
import QuickSearch from '../QuickSearch/quick-search';
import StyledNavbar from './navbar.styled';

function Navbar({ showSearch }: NavbarProps) {
  const user = useSelector<MainState>((state) => state.user);

  const logout = () => {
    // Delete user data
  };

  return (
    <StyledNavbar>
      <div className="links">
        <Link to="/home">
          <button>Home</button>
        </Link>
        <Link to="/profile">
          <button>Profile</button>
        </Link>
        <Link to="/">
          <button onClick={logout}>Logout</button>
        </Link>
      </div>
      {showSearch && <QuickSearch />}
    </StyledNavbar>
  );
}

export default Navbar;
