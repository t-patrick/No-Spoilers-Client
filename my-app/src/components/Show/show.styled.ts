import styled from 'styled-components';

const StyledShow = styled.div`
  color: white;

  .show-view {
    display: flex;
    justify-content: space-around;
    margin-top: 2.5%;
    margin-bottom: 2.5%;
  }

  .tagline {
    font-style: italic;
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

  .button-containerButton:hover {
    border: 2px solid var(--sharp-purple);
    margin-top: 16px;
    padding: 6px;
    outline: none;
  }

  .progress {
    background-color: #777700;
    border-radius: 10px;
    padding: 15px;
    text-align: center;

    p {
      margin: 0;
    }

    h3 {
      margin: 0;
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
