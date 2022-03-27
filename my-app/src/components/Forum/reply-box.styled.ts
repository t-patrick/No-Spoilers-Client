import styled from 'styled-components';

const StyledReplyBox = styled.div`
  border-radius: 10px;

  .replier-bar {
    display: flex;
    align-items: center;
  }
  .replier-progress {
    padding: 8px 10px;
    border-radius: 10px;
    margin-left: 5px;
  }
  .replier-progress-ahead {
    color: white;
    background-color: darkred;
    height: 18px;
  }
  .replier-progress-same {
    margin-left: -8px;
    color: white;
  }
  .replier-progress-behind {
    color: white;
    background-color: black;
  }

  .edit {
    display: flex;
    gap: 15px;
    align-items: center;

    button {
      align-self: flex-end;
      border-radius: 10px;
      padding: 8px 12px;
      border: 0;
      min-width: 80px;
      color: white;
      box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
      background-color: black;
    }
  }

  .edit-box {
    font-family: 'Inter', sans-serif;
    resize: none;
    height: 100px;
    width: 300px;
  }
`;

export default StyledReplyBox;
