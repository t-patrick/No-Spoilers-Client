import styled from 'styled-components';

const StyledShow = styled.div`
  color: white;

  .show-view {
    display: flex;
    justify-content: space-around;
    margin-top: 2.5%;
    margin-bottom: 2.5%;
  }

  .display-details {
    display: flex;
    flex-direction: column; 
    // border: 1px solid blue;
    margin-top: 15px;

    span {
      font-weight: bold;
    }

    div {
      padding-top: 20px;
      text-align: justify;
      color: #F7F5F2;
    }

    .tagline {
      padding-top: 50px;
      text-align: right;
      font-style: italic;
      color: white;
      text-transform: uppercase;
    }
  }

  .button-container {
    text-align: center;
  }

  .image-button-container img {
    width: 300px;
  }

  .button-container Button {
    color: white;
    font-family: var(--main-font);
    background-color: var(--navbar-color);
    padding: 8px;
    border-radius: 8px;
    margin-top: 16px;
  }

  .button-container Button:hover {
    border: 1px solid var(--sharp-purple);
    // border-color: var(--sharp-purple);
    margin-top: 16px;
    padding: 6px;
    outline: none;
  }

  .progress {
    background-color: #1b2530;
    border-radius: 10px;
    padding: 15px;
    text-align: center;

    p {
      margin: 0;
    }

    h3 {
      margin: 0;
      padding-top: 10px;
    }

    h4 {
      margin: 0;
      font-size: 22px;
      margin-bottom: 30px;
    }
  }
  .show-description {
    text-align: center;
    h1 {
      margin-top: 0;
    }
  }
`;

export default StyledShow;
