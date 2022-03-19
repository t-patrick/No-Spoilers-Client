import React from 'react'
import blackLogo from './images/black-logo.png';

function Login() {



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
