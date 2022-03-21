import styled from 'styled-components';

const StyledEpisodeChooser = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 600px;
  background-color: 'lightgrey';
  margin: 0 auto;
  font-family: 'Arial';
  user-select: none;

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    justify-content: center;
    width: 100%;
    li {
      border-radius: 30px 25px 0px 0px;
      position: relative;
      flex-grow: 1;
      width: auto;
      padding: 20px;
      margin: 0;
      height: 20px;
      text-align: center;
      font-size: 20px;
      color: black;
    }

    li::after {
      content: '';
    }
  }

  .main {
    height: 100%;
    width: 100%;
    background-color: #d4d4d8;
    overflow-y: none;
    overflow-x: auto;
    ::-webkit-scrollbar {
      width: 20px;
    }

    ::-webkit-scrollbar-track {
      background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #1f2937;
      border-radius: 20px;
      border: 6px solid transparent;
      background-clip: content-box;
    }
  }

  .episodes {
    padding: 20px 40px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 10px;
  }
  .episode {
    color: white;
    padding: 30px;
    border-radius: 10px;
    min-width: fit-content;
    max-width: 30%;
    min-width: 30px;
    text-align: center;
  }

  h1 {
    margin: 20px auto 5px auto;
    width: fit-content;
  }
`;

export default StyledEpisodeChooser;
