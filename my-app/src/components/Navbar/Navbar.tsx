import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { loginUser, registerUser } from '../../API/user-api';
import { NavbarProps } from '../../proptypes';
import { UserActionCreators } from '../../state/action-creators';
import { setUserAction as setUserActionCreator } from '../../state/action-creators/user-action-creators';
import { ActionType } from '../../state/action-types';
import QuickSearch from '../QuickSearch/quick-search';
import StyledNavbar from './navbar.styled';

function Navbar({ showSearch }: NavbarProps) {
  const dispatch = useDispatch();

  const { setUserAction } = bindActionCreators(UserActionCreators, dispatch);

  const navigate = useNavigate();

  return (
    <StyledNavbar>
      <Link to="/home">
        <button>Home</button>
      </Link>
      {showSearch && <QuickSearch />}
    </StyledNavbar>
  );
}

export default Navbar;
