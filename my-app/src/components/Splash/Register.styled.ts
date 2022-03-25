import styled from "styled-components";

const StyledRegister = styled.div`
  display: flex;
  justify-content: space-evenly;
  border: 2px solid purple;

  .spiderman-container img  {
    width: 600px;
    margin: 2%;
    padding-top: 5%;
  }

  .form-container {
    background-color: white;
    border-radius: 2%;
    margin: 2%; 
    width: 25%;
    padding: 1%;
  }

  header {
    display: flex;
    justify-content: space-between;
  }

  .blacklogo img {
    width: 150px;
    padding-top: 10%;
    padding-right: 20px;
  }

  header .text-container {
    padding-top: 16px;
  }

  .welcome {
    font-size: 32px;
  }

  .sign-up-to {
    font-weight: 400;
    margin-top: 50px;
    font-size: 30px;
    margin-bottom: 3%;
  }

  section {
    margin: 5% auto;
    margin-top: 30px;
  }

  section .email {
    padding-bottom: 5%;
  }

  section .email input {
    margin-top: 2%;
    width: 90%;
    padding: 20px;
  }

  section .user-name {
    // padding-top: 20%;
    padding-bottom: 5%;
  }

  section .user-name input {
    margin-top: 2%;
    width: 90%;
    padding: 20px;
  }

  section .password {
    padding-bottom: 5%;
  }
  section .password input{
    margin-top: 2%;
    width: 90%;
    padding: 20px;
  }

  section .confirm-password input {
    margin-top: 2%;
    width: 90%;
    padding: 20px;
  }

  section button {
    margin-top: 4%;
    width: 100%;
    border: none;
    background-color: black;
    color: white;
    padding: 20px; 
    cursor: pointer;
  }

  .btn-login {
    border: none;
    background-color: white;
    font-weight: 900;
    cursor: pointer;
  }

  footer {
    text-align: center;
    margin-top: 5%;
  }
`
export default StyledRegister;