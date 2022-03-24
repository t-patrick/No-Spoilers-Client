import React from 'react';
import Navbar from '../Navbar/Navbar';
import StyledProfile from './profile.styled';

function Profile() {
  const placeholderAvatar = 'https://avatars.dicebear.com/api/male/brucewayne.svg'

  return (
    <StyledProfile>
      <Navbar showSearch={true}/>
      
      <div className='profile-layout'>

        <div className='avatar-container'>
          <h1 className='current-user-name'>
            Bruce Wayne
          </h1>
          <div className='current-avatar'>
            <img src={placeholderAvatar}/>
          </div>
        </div>

        <form className='input-container'>
          <div className='heading-row row'>
          {/* <div>Edit User&#39;s Detail</div> */}
            <div>Hey Bruce, you wanna change your details below?</div>
          </div>

          <div className='name-email-row row'>
            <div>
              <div>User Name</div>
              <input type='text' />
            </div>

            <div>
              <div>Email</div>
              <input type='text' />
            </div>
          </div>

          <div className='pwd-row row'>
            <div>
              <div>Password</div>
              <input type='text' />
            </div>
            <div>
              <div>Confirm Password</div>
              <input type='text' />
            </div>
          </div>

          <div className='btn-row row'>
            <button>SAVE CHANGES</button>
          </div>

        </form>
      </div>


    </StyledProfile>
  );
}

export default Profile;