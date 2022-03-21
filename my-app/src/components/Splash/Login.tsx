import React, { SyntheticEvent, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { loginUser } from '../../API/user-api';
import { UserActionCreators } from '../../state/action-creators';
import { checkEmail, checkPassword } from './formHelpers';
import blackLogo from './images/black-logo.png';
import { StyledLogin } from './Login.styled';
import spidermanImage from './images/spiderman.png'

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
      });
    }
  }

  return (
    <StyledLogin>
      <div className='spiderman-container'>
        <img src={spidermanImage} />
      </div>

      <div className='form-container'>
        <form>

          <header>
            <div className='text-container'>
              <div className='welcome'>Welcome !</div>
              <div className='sign-in-to'>Sign in to</div>
              <div>NO SPOILERS!</div>
            </div>

            <div className='blacklogo'>
              <img src={blackLogo} />
            </div>
          </header>

          <section>
            <div className='user-name'>
              <div>User name</div>
              <input type='text' value='' name='user-name' placeholder='Enter your user name' />
            </div>

            <div className='password'>
              <div>Password</div>
              <input type='text' value='' name='password' placeholder='Enter your password' />
            </div>

            <div>
              <button type='submit'>Login</button>
            </div>
          </section>

          <footer>
            Dont have an Account? <button className='btn-register'>Register</button>
          </footer>

        </form>
      </div>
    </StyledLogin>
  )
}

export default Login;