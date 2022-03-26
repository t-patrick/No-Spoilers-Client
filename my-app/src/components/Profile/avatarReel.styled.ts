import styled from 'styled-components';

const StyledAvatarReel = styled.div`
  color: white;
  display: flex;
  // overflow: scroll;
  width: 300px;
  // border: 1px solid red;
  overflow-y: hidden;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  flex-wrap: nowrap;

  .avatar-container {
    padding: 0;
    width: 70px;
    // border: 1px solid red;
    margin: 3px;

  }

  img {
    width: 70px;
    cursor: pointer;
  }

  img: hover {
    width: 80px;
    transition: 1s;
  }

`

export default StyledAvatarReel;