import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { registerUser } from '../../API/user-api';
import { UserActionCreators } from '../../state/action-creators';
import blackLogo from './images/black-logo.png';


const userr: DBUser = {
  email: 'eeeaaaawda',
  password: 'aeirughra',
  displayName: 'Timo',
  avatar: 'ava',
}

function Register() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { setUserAction } = bindActionCreators(UserActionCreators, dispatch);


  const fetchUser = async (userToSend: DBUser) => {
    const user = await registerUser(userToSend);
    setUserAction(user);
    navigate('/home');
  };

  return (
    <div>
      <div>
        <button onClick={() => fetchUser(userr)}>Test Button</button>
        <form>
          <div>Welcome !</div>
          <h2>Sign up to</h2>
          <div>NO SPOILERS!</div>

          <div>
            <img src={blackLogo} />
          </div>

          <div>
            <div>Email</div>
            <input type='text' value='' name='new-email' placeholder='Enter your email' />
          </div>

          <div>
            <div>User name</div>
            <input type='text' value='' name='new-user-name' placeholder='Enter your user name' />
          </div>

          <div>
            <div>Password</div>
            <input type='text' value='' name='new-password' placeholder='Enter your password' />
          </div>

          <div>
            <div>Confirm Password</div>
            <input type='text' value='' name='new-confirm-password' placeholder='Confirm your password' />
          </div>

          <div>
            <button type='submit'>Register</button>
          </div>

          <div>
            Already have an account? <span>Signin</span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register;