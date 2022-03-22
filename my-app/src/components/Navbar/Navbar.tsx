import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { loginUser, registerUser } from '../../API/user-api';
import { UserActionCreators } from '../../state/action-creators';
import { setUserAction as setUserActionCreator } from '../../state/action-creators/user-action-creators';
import { ActionType } from '../../state/action-types';
import StyledNavbar from './navbar.styled';
import QuickSearch from './quick-search';

function Navbar() {

  const isLoggedIn = useSelector<MainState>(state => state.user.isLoggedIn);

  const dispatch = useDispatch()

  const { setUserAction } = bindActionCreators(UserActionCreators, dispatch);

  const navigate = useNavigate();

  return !isLoggedIn ? (

    <></>
  )
    :
    <StyledNavbar>
      <QuickSearch />
    </StyledNavbar>
}

export default Navbar;

