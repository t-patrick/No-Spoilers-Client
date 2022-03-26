import React from 'react'
import StyledAvatarReel from './avatarReel.styled';

function AvatarReel() {
  
  let num = 1;
  function testing () {
    console.log('clicked!')
  }

  return (
    <StyledAvatarReel>

      <div className='avatar-container'>
          <img
            src={`https://avatars.dicebear.com/api/female/${num}.svg`} 
            onClick={testing}
          />
      </div>
      <div className='avatar-container'>
          <img
            src={`https://avatars.dicebear.com/api/female/${num}.svg`} 
            onClick={testing}
          />
      </div>
      <div className='avatar-container'>
          <img
            src={`https://avatars.dicebear.com/api/female/${num}.svg`} 
            onClick={testing}
          />
      </div>
      <div className='avatar-container'>
          <img
            src={`https://avatars.dicebear.com/api/male/${num}.svg`} 
            onClick={testing}
          />
      </div>
      <div className='avatar-container'>
          <img
            src={`https://avatars.dicebear.com/api/male/${num}.svg`} 
            onClick={testing}
          />
      </div>
      



    </StyledAvatarReel>
  )
}

export default AvatarReel;