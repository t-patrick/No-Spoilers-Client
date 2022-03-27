import styled from 'styled-components';

const StyledTopicBox = styled.div`
  display: flex;
  flex-direction: column;

  .topic-content {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

  .num-of-replies {
    margin-left: 16px;
    color: white;
  }

  .topic-main {
    display: flex;
  }

  .title-and-date {
    padding: 10px 15px;
    align-self: center;
    h3 {
      margin: 3px 0px 5px 0px;
    }
  }

  .user-buttons {
    display: flex;
    margin: 5px 0px 0px 10px;
    gap: 10px;

    button {
      border-radius: 10px;
      padding: 8px 12px;
      border: 0;
      min-width: 80px;
      color: white;
      box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
    }
  }

  .remove-button {
    background-color: darkred;
  }

  .edit-button {
    background-color: darkblue;
  }

  .top-row {
    display: flex;
    gap: 10px;
    align-items: center;
  }
  .edit {
    display: flex;
    gap: 15px;
    align-items: center;
    width: 300px;

    .button {
      align-self: flex-end;
      border-radius: 10px;
      padding: 8px 12px;
      border: 0;
      min-width: 80px;
      max-width: 80px;
      color: white;
      box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
      background-color: black;
    }
  }

  .edit-box {
    font-family: 'Inter', sans-serif;
    resize: none;
    height: 100px;
    width: 200px;
  }
`;

export default StyledTopicBox;
