import styled from "styled-components";


const StyledLogin = styled.div`

  background-color: var(--bg-color);
  display: flex;
  justify-content: space-evenly;
  border: 2px solid red;

  .spiderman-container img  {
    width: 500px;
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
    // border: 5px solid blue;
    justify-content: space-between;
  }

  .blacklogo img {
    width: 100px;
    // border: 2px solid yellow;
  }

  header .text-container {
    // border: 2px solid green;
    padding-top: 16px;
  }

  .sign-in-to {
    font-weight: 400;
    margin-top: 10%;
    font-size: 30px;
    margin-bottom: 3%;
  }

  section {
    // border: 2px solid red;
    margin: 5% auto;
    margin-top: 30px;
  }

  section .user-name {
    padding-bottom: 5%;
  }

  section .user-name input {
    margin-top: 2%;
    width: 98%;
  }

  section .password  input{
    margin-top: 2%;
    width: 98%;
  }

  section button {
    margin-top: 10%;
    width: 100%;
    border: none;
    background-color: black;
    color: white;
    padding: 30% auto; 
  }

  .btn-register {
    border: none;
    background-color: white;
    font-weight: 900;
  }

  footer {
    // border: 2px solid purple;
    text-align: center;
    margin-top: 50%;
  }





`;





export { StyledLogin}