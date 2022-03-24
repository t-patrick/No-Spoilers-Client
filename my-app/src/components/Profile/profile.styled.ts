import styled from 'styled-components';

const StyledProfile = styled.div`
  color: white;
  
  .profile-layout {
    display: flex;
    border: 1px solid red;
    justify-content: space-between;
  }

  .avatar-container {
    display: flex;
    // border: 1px solid green;
    display: center;
    align-items: center;
    flex-direction: column;
    flex: 1;
  }

  .old-avatar img {
    width: 50%;
    // border: 1px solid blue;
  }

  .input-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid purple;
    flex: 1;
  }
  
  .heading {
    flex: 1;
  }

  .name-email {
    display: flex;
    flex: 1;
  }

  .pwd {
    display: flex;
    flex: 2;

  }

  .btn {
    flex: 2;
  }


`

export default StyledProfile;