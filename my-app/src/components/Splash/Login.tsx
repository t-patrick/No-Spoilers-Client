import React, { SyntheticEvent, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { loginUser } from '../../API/user-api';
import { UserActionCreators } from '../../state/action-creators';
import { checkEmail, checkPassword } from './formHelpers';
import blackLogo from './images/black-logo.png';

function Login() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { setUserAction } = bindActionCreators(UserActionCreators, dispatch);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');

  const fetchUser = async (userToSend: DBUser) => {
    const user = await loginUser(userToSend);
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
      })
    }
  }


  return (
    <div>
      <div>
        <form>
          <div>Welcome !</div>
          <h2>Sign in to</h2>
          <div>NO SPOILERS!</div>

          <div>
            <img src={blackLogo} />
          </div>

          <div>
            <div>User name</div>
            <input type='text' value='' name='user-name' placeholder='Enter your user name' />
          </div>

          <div>
            <div>Password</div>
            <input type='text' value='' name='password' placeholder='Enter your password' />
          </div>

          <div>
            <button type='submit'>Login</button>
          </div>

          <div>
            Dont have an Account? <span>Register</span>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Login; 
