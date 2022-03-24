import styled from 'styled-components';

const StyledHome = styled.div`
  color: white;

  .filter {
    text-align: center;
  }

  .filter input {
    border: 1px solid #6f6f6f;
    color: #6f6f6f;
    background-color: var(--bg-color);
    border-radius: 25px;
    width: 35%;
    padding: 25px;
    margin-top: 50px;
  }

  .filter input: focus {
    border: 1px solid var(--light-purple);
    transition: 1s;
    outline: none;
  }

  .row {
    border: 1px solid red;
    margin: 20px;
  }
  
  .poster-container {
    border: 1px solid blue;

    display: flex;
    flex-wrap: nowrap;
    margin-bottom: 5vh;
    overflow-y: hidden;
    overflow-x: auto;
  }

  .row img {
    width: 300px;
    border: 1px solid green;
    margin: auto 8px;
  }
  
  .heading {
    padding-top: 15px;
    padding-bottom: 15px;
    font-weight: 500;
    font-size: 32px;
  }




`;

export default StyledHome;
