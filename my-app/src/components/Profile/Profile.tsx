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
          <div className='old-user-name'>
            Bruce Wayne
          </div>
          <div className='old-avatar'>
            <img src={placeholderAvatar}/>
          </div>
        </div>

        <form className='input-container'>
          <div className='heading'>
            <h2>Edit User&#39;s Detail</h2>
          </div>

          <div className='name-email'>
            <div>
              <div>User Name</div>
              <input type='text' />
            </div>

            <div>
              <div>Email</div>
              <input type='text' />
            </div>
          </div>

          <div className='pwd'>
            <div>
              <div>Password</div>
              <input type='text' />
            </div>
            <div>
              <div>Confirm Password</div>
              <input type='text' />
            </div>
          </div>

          <div className='btn'>
            <button>SAVE CHANGES</button>
          </div>

        </form>
      </div>


    </StyledProfile>
  );
}

export default Profile;