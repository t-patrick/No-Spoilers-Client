import React from 'react';
import blackLogo from './images/black-logo.png';
import spidermanImage from './images/spiderman.jpeg'
import StyledRegister from './Register.styled';



function Register() {
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

            <div className='blacklogo'>
              <img src={blackLogo}/>
            </div>
          </header>
          
          <section>
            <div className='email'>
              <div>Email</div>
              <input type='text' name='new-email' placeholder='Enter your email'/>
            </div>

            <div className='user-name'>
              <div>User name</div>
              <input type='text' name='new-user-name' placeholder='Enter your user name'/>
            </div>

            <div className='password'>
              <div>Password</div>
              <input type='text' name='new-password' placeholder='Enter your password'/>
            </div>

            <div className='confirm-password'>
              <div>Confirm Password</div>
              <input type='text' name='new-confirm-password' placeholder='Confirm your password'/>
            </div>

            <div>
              <button type='submit'>Register</button>
            </div>
          </section>

          <footer>
              Already have an account? <button className='btn-login'>Log in</button>
          </footer>
        </form>
      </div>
    </StyledRegister>
  )
}

export default Register;