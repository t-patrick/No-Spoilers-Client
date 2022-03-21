import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { UserActionCreators } from '../../state/action-creators';
import { setUserAction as setUserActionCreator } from '../../state/action-creators/user-action-creators';
import { ActionType } from '../../state/action-types';

function Navbar() {

  const isLoggedIn = useSelector<MainState>(state => state.user.isLoggedIn);

  const dispatch = useDispatch()

  const { setUserAction } = bindActionCreators(UserActionCreators, dispatch);

  const navigate = useNavigate();

  return isLoggedIn ? (
    <div>
      <h1 onClick={() => navigate('/show/5')}>Hello!</h1>
    </div>
  )
    : (
      <button onClick={() => setUserAction(user)}>Go to show</button>
    )
}

export default Navbar;

const user: User = {
  _id: 1234,
  email: 'email',
  displayName: 'Tim',
  avatar: 'ava',
  userTVInfo: []
}