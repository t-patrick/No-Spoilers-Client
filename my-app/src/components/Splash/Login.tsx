import React from 'react'
import blackLogo from './images/black-logo.png';
import {StyledLogin} from './Login.styled';
import spidermanImage from './images/spiderman.png'


function Login() {
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
              Do not have a No Spoilers Account?<button className='btn-register'>Register</button>
            </footer>
          </form>
        </div>
    </StyledLogin>
  )
}

export default Login; 
