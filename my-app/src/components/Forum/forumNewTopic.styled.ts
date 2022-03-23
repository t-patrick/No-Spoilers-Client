import styled from 'styled-components';

const StyledForumNewTopic = styled.div`
  font-family: var(--main-font);
  background-color: var(--chatbox-color);
  color: var(--chatbox-wrd);
  margin: auto 80px;
  border-radius: 10px;
  margin-bottom: 50px;
  margin-top: 30px;
  min-height: 430px;
  max-height: 430px;

  .title {
    padding-top: 2.5%;
  }

  .body {
    padding-top: 1%;
    height: 200px;

    textarea {
      height: 150px;
    }
  }

  .title,
  .body {
    margin: 20px;
  }

  textarea {
    background-color: var(--chatbox-color);
    color: var(--chatbox-wrd);
    border-radius: 10px;
    width: 99%;

    border: 2px solid var(--chatbox-border);
    margin-top: 10px;

  }

  .btn {
    text-align: center;
    padding-bottom: 16px;
  }

  .btn button {
    margin-: 50px;
  }

  textarea: focus {
    outline: none;
    border: 2px solid var(--light-purple);
    transition: 0.5s;
  }

  button {
    background-color: #4a5568;
    font-family: var(--main-font);
    border: none;
    border-radius: 5px;
    color: white;
    padding: 15px;
  }

  button: hover {
    cursor: pointer;
    outline: none;
    border: 1px solid var(--light-purple);
  }
`;

export default StyledForumNewTopic;
