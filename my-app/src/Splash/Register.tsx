import React from 'react';
import blackLogo from './images/black-logo.png';


function Register() {
  return (
    <div>
      <div>
        <form>
          <div>Welcome !</div>
          <h2>Sign up to</h2>
          <div>NO SPOILERS!</div>

          <div>
            <img src={blackLogo}/>
          </div>

          <div>
            <div>Email</div>
            <input type='text' value='' name='new-email' placeholder='Enter your email'/>
          </div>

          <div>
            <div>User name</div>
            <input type='text' value='' name='new-user-name' placeholder='Enter your user name'/>
          </div>

          <div>
            <div>Password</div>
            <input type='text' value='' name='new-password' placeholder='Enter your password'/>
          </div>

          <div>
            <div>Confirm Password</div>
            <input type='text' value='' name='new-confirm-password' placeholder='Confirm your password'/>
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