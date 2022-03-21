import React, { SyntheticEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { registerUser } from '../../API/user-api';
import { UserActionCreators } from '../../state/action-creators';
import { checkEmail, checkPassword } from './formHelpers';
import blackLogo from './images/black-logo.png';
import spidermanImage from './images/spiderman.jpeg'



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

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');

  const fetchUser = async (userToSend: DBUser) => {
    const user = await registerUser(userToSend);
    if (user)
      setUserAction(user);
    navigate('/home');
  };

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (checkEmail(email) && checkPassword(password) && displayName) {
      fetchUser({
        email,
        password,
        displayName,
        avatar: ''
      });
    }
  }

  return (
    <div>
      <div>
        <button onClick={() => fetchUser(userr)}>Test Button</button>

        <div>
          <img src={spidermanImage} />
        </div>

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