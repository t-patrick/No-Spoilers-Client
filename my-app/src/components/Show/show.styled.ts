import styled from 'styled-components';

const StyledShow = styled.div`
  color: white;
  margin-left: 180px;

  .show-view {
    display: flex;
    justify-content: space-between;
    margin-top: 2.5%;
    margin-bottom: 2.5%;
    margin-left: 10%;
    margin-right: 10%;
  }

  .show-details {
    text-align: left;
    p {
      margin-top: 30px;
      span {
        font-weight: bold;
      }
    }
  }

  .tagline {
    text-align: right;
    font-style: italic;
    text-transform: uppercase;
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
    margin-top: 16px;
    padding: 7px;
    outline: none;
  }

  .progress {
    background-color: #1b2530;
    border-radius: 10px;
    padding: 15px;
    text-align: center;

    p {
      margin: 0;
      padding-top: 15px;
    }

    h3 {
      margin: 0;
      padding-top: 10px;
    }

    h4 {
      margin: 0;
      font-size: 22px;
      margin-bottom: 10px;
    }
  }
  .show-description {
    text-align: center;
  }
`;

export default StyledShow;
