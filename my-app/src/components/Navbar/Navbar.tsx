import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { NavbarProps } from '../../proptypes';
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
            navigate('/home');
          }}
        >
          Home
        </button>
        <button
          onClick={() => {
            navigate('/profile');
          }}
        >
          Profile
        </button>
        <Link to="/">
          <button onClick={logout}>Logout</button>
        </Link>
      </div>
      {showSearch && <QuickSearch />}
    </StyledNavbar>
  );
}

export default Navbar;
