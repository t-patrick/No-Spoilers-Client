import React, { SyntheticEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { registerUser } from '../../API/user-api';
import { LoginProps } from '../../proptypes';
import { UserActionCreators } from '../../state/action-creators';
import { checkEmail, checkPassword } from './formHelpers';
import blackLogo from './images/black-logo.png';
import spidermanImage from './images/spiderman.jpeg'
import StyledRegister from './Register.styled';



const userr: DBUser = {
  email: 'eeeaaaawefefwda',
  password: 'aeirughwefwra',
  displayName: 'Tiwefwefmo',
  avatar: 'ava',
}

function Register({ setLoginOrRegister }: LoginProps) {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { setUserAction } = bindActionCreators(UserActionCreators, dispatch);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [displayName, setDisplayName] = useState('');

  const [avatarRegister, setAvatarRegister] = useState<string>('');


  const fetchUser = async (userToSend: DBUser) => {
    const user = await registerUser(userToSend);
    if (user)
      setUserAction(user);
    navigate('/home');
  };

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (checkEmail(email) && checkPassword(password) && passwordConfirm === password && displayName) {
      fetchUser({
        email,
        password,
        displayName,
        avatar: ''
      });
    }
  }

  const getRandomString = (): string => {
    let randNum = Math.floor(Math.random()*1000);
    const rando = Math.floor(Math.random() * 100) % 2 === 0;
    return (rando ? 'male/' : 'female/') + randNum + '.png';
  };

  return (
    <StyledRegister>
      <div className='spiderman-container'>
        <img src={spidermanImage} />
      </div>

      <div className='form-container'>
        <form>
          <header>
            <div className='text-container'>
              <div className='welcome'>Welcome !</div>
              <div className='sign-up-to'>Sign up to</div>
              <div>NO SPOILERS!</div>
            </div>

            <div className='blacklogo avatar-container'>
              <button onClick={(e: SyntheticEvent) => {
                e.preventDefault();
                setAvatarRegister('https://avatars.dicebear.com/api/' + getRandomString());

                }
                }>
              Pick your avatar
              </button>
              <div className="current-avatar">
                <img src={avatarRegister} />
              </div>
            </div>

          </header>

          <section>
            <div className='email'>
              <div>Email</div>
              <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} name='new-email' placeholder='Enter your email' />
            </div>

            <div className='user-name'>
              <div>User name</div>
              <input type='text' value={displayName} onChange={(e) => setDisplayName(e.target.value)} name='new-user-name' placeholder='Enter your user name' />
            </div>

            <div className='password'>
              <div>Password</div>
              <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} name='new-password' placeholder='Enter your password' />
            </div>

            <div className='confirm-password'>
              <div>Confirm Password</div>
              <input type='password' value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} name='new-confirm-password' placeholder='Confirm your password' />
            </div>

            <div>
              <button type='submit' onClick={onSubmit}>Register</button>
            </div>
          </section>

          <footer>
            Already have an account? <button className='btn-login' onClick={() => setLoginOrRegister('login')}>Log in</button>
          </footer>
        </form>
      </div>
    </StyledRegister>
  )
}

export default Register;