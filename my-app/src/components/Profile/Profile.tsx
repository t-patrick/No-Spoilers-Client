import React, { SyntheticEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateUserAvatar } from '../../API/user-api';
import { UserActionCreators } from '../../state/action-creators';
import Navbar from '../Navbar/Navbar';
import AvatarReel from './AvatarReel';
import StyledProfile from './profile.styled';

function Profile() {
  const dispatch = useDispatch();
  const user = useSelector<MainState>((state) => state.user.user) as User;
  const { updateUserAction } = bindActionCreators(UserActionCreators, dispatch);

  const [userName, setUserName] = useState<string>(user.displayName);
  const [email, setEmail] = useState<string>(user.email);
  const [oldPassword, setOldPassword] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordVerify, setPasswordVerify] = useState<string>('');

  const [avatar, setAvatar] = useState<string>(user.avatar);

  const updateAvatar = async () => {
    console.log('in updateAvatar', avatar);
    const response = await updateUserAvatar(avatar);

    if (response) {
      const newUser: User = {
        userTVInfo: user.userTVInfo,
        ...response,
      };
      updateUserAction(newUser);
    }
  };

  useEffect(() => {
    console.log('user avatar on load', user.avatar);
  }, []);

  const updateUser = (e: SyntheticEvent) => {
    e.preventDefault();
    if (email === user.email && userName === user.displayName) {
      if (avatar !== user.avatar) updateAvatar();
      return;
    }
  };

  const getRandomString = (): string => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    for (let i = 0; i < 10; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    const rando = Math.floor(Math.random() * 100) % 2 === 0;

    return (rando ? 'male/' : 'female/') + result + '.svg';
  };

  return (
    <StyledProfile>
      <Navbar showSearch={true} />

      <div className="profile-layout">
        <div className="avatar-container">
          <h1 className="current-user-name">Pick an avatar</h1>
          <div className="current-avatar">
            <img src={'https://avatars.dicebear.com/api/' + avatar} />
          </div>
          <AvatarReel setAvatar={setAvatar} />
          <button
            className="save-change"
            style={{ marginTop: 15 }}
            onClick={() => {
              const random = getRandomString();
              setAvatar(random);
              console.log('random string', random);
            }}
          >
            Random Avatar
          </button>
        </div>

        <form className="input-container">
          <div className="heading-row row">
            <div>
              Hey {user.displayName}, you wanna change your details below?
            </div>
          </div>

          <div className="name-email-row row">
            <div>
              <div>Username</div>
              <input
                className="input-area"
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>

            <div>
              <div>Email</div>
              <input
                className="input-area"
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
                className="input-area"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <div>Confirm Password</div>
              <input
                className="input-area"
                type="password"
                value={passwordVerify}
                onChange={(e) => setPasswordVerify(e.target.value)}
              />
            </div>
          </div>

          <div className="btn-row row">
            <button
              className="save-change"
              type="submit"
              onClick={(e) => updateUser(e)}
            >
              SAVE CHANGES
            </button>
          </div>
        </form>
      </div>
    </StyledProfile>
  );
}

export default Profile;
