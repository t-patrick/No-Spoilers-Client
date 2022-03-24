import styled from 'styled-components';

const StyledProfile = styled.div`
  color: white;
  
  .profile-layout {
    display: flex;
    // border: 1px solid red;
    justify-content: space-between;
    margin-top: 30px;
    height: 90vh;
  }

  
  .avatar-container {
    display: flex;
    display: center;
    align-items: center;
    flex-direction: column;
    flex: 1;


    padding-top: 200px;
  }
  

  .current-avatar {
    margin-top: 30px;
    margin-bottom: 30px;
  }

  .current-avatar img {
    width: 100%;
  }


  .input-container {
    flex: 2;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .row {
    // border: 1px solid white;
  }

  .heading-row {
    font-size: 40px;
    line-height: 60px;
    font-weight: 300;
    
    padding-left: 13%;

    flex: 2;
  }

  .name-email-row {
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    
    flex: 2;
  }

  .pwd-row {
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    flex: 2;
  }

  .btn-row {
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;


    flex: 2;
  }

  input {
    border-radius: 10px;
    outline: none;
    border-color: transparent;
    width: 367px;
    margin-top: 20px;
    padding: 15px 10px
  }


`

export default StyledProfile;