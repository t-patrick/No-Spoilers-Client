import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../Navbar/Navbar';
import AvatarReel from './AvatarReel';
import StyledProfile from './profile.styled';

function Profile() {
  const placeholderAvatar =
    'https://avatars.dicebear.com/api/male/brucewayne.svg';

  const user = useSelector<MainState>((state) => state.user.user) as User;

  const [userName, setUserName] = useState<string>(user.displayName);
  const [email, setEmail] = useState<string>(user.email);
  const [oldPassword, setOldPassword] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordVerify, setPasswordVerify] = useState<string>('');

  const updateUser = () => {
    const newUser = {};
  };

  return (
    <StyledProfile>
      <Navbar showSearch={true} />

      <div className="profile-layout">
        <div className="avatar-container">
          <h1 className="current-user-name">Bruce Wayne</h1>
          <div className="current-avatar">
            <img
              src={`https://avatars.dicebear.com/api/male/${user.avatar}.svg`}
            />
          </div>
          <div className='new-avatar'>
            <AvatarReel/>
          </div>
        </div>

        <form className="input-container">
          <div className="heading-row row">
            <div>Hey {user.displayName}, you wanna change your details below?</div>
          </div>

          <div className="name-email-row row">
            <div>
              <div>Username</div>
              <input 
                className='input-area'
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>

            <div>
              <div>Email</div>
              <input
                className='input-area'
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="pwd-row row">
            <div>
              <div>Password</div>
              <input
                className='input-area'
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <div>Confirm Password</div>
              <input
                className='input-area'
                type="password"
                value={passwordVerify}
                onChange={(e) => setPasswordVerify(e.target.value)}
              />
            </div>
          </div>

          <div className="btn-row row">
            <button className="save-change" type="submit" onClick={updateUser}>
              SAVE CHANGES
            </button>
          </div>
        </form>
      </div>
    </StyledProfile>
  );
}

export default Profile;
