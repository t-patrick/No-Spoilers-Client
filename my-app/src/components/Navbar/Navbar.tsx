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
  const state = useSelector<MainState>((state) => state);

  const logout = () => {
    // Delete user data
  };

  const navigate = useNavigate();

  return (
    <StyledNavbar>
      <div className="links">
        <button
          onClick={() => {
            navigate('/home', {
              state: state,
            });
          }}
        >
          Home
        </button>
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
