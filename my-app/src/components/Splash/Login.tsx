import React, { SyntheticEvent, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import blackLogo from './images/black-logo.png';
import { StyledLogin } from './Login.styled';
import spidermanImage from './images/spiderman.png'
import { LoginProps } from '../../proptypes';
import { loginUser } from '../../API/user-api';
import { UserActionCreators } from '../../state/action-creators';
import { checkEmail, checkPassword } from './formHelpers';

function Login({ setLoginOrRegister }: LoginProps) {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { setUserAction } = bindActionCreators(UserActionCreators, dispatch);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const fetchUser = async (userToSend: Omit<DBUser, 'displayName' | 'avatar'>) => {
    const user = await loginUser(userToSend);
    setUserAction(user);
    navigate('/home');
  };

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (checkEmail(email) && checkPassword(password)) {
      fetchUser({
        email,
        password
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
              <input type='text' value={email} onChange={e => setEmail(e.target.value)} name='user-name' placeholder='Enter your user name' />
            </div>

            <div className='password'>
              <div>Password</div>
              <input type='password' value={password} onChange={e => setPassword(e.target.value)} name='password' placeholder='Enter your password' />
            </div>

            <div>
              <button type='submit' onClick={onSubmit}>Login</button>
            </div>
          </section>

          <footer>
            Do not have a No Spoilers Account?<button className='btn-register' onClick={() => setLoginOrRegister('register')}>Register</button>
          </footer>
        </form>
      </div>
    </StyledLogin>
  )
}

export default Login;