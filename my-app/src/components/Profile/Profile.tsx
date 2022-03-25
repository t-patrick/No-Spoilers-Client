import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../Navbar/Navbar';
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
        </div>

        <form className="input-container">
          <div className="heading-row row">
            {/* <div>Edit User&#39;s Detail</div> */}
            <div>Hey Bruce, you wanna change your details below?</div>
          </div>

          <div className="name-email-row row">
            <div>
              <div>Username</div>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>

            <div>
              <div>Email</div>
              <input
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
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <div>Confirm Password</div>
              <input
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