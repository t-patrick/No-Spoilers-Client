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
    margin: 20px;
  }
  
  .heading {
    padding-top: 15px;
    padding-bottom: 15px;
    font-weight: 500;
    font-size: 32px;
  }

  .on-the-go {
    border: 2px solid yellow;
  }

  .completed {
    border: 2px solid red;
  }
`;

export default StyledHome;
