import styled from 'styled-components';

const StyledChatList = styled.div`
  .show-list {
    height: 500px;
    width: 500px;
    color: white;
  }

  .show-item {
  }

  .show-header {
  }

  .chat-list {
  }

  .chat-box {
    display: block;
    position: fixed;
    bottom: 10px;
    left: 100px;
    width: 300px;
    height: 600px;
    background-color: white;
    z-index: 100;
    border-radius: 10px;
    color: black;
    padding: 40px;
  }

  .chat-box-min {
    display: block;
    position: fixed;
    bottom: 10px;
    left: 100px;
    width: 300px;
    height: 50px;
    background-color: white;
    z-index: 100;
    border-radius: 10px;
    color: black;
    padding: 40px;
  }

  .chat-box-minimised {
    display: block;
    position: fixed;
    bottom: 10px;
    left: 100px;
    width: 100px;
    height: 80px;
    background-color: darkgrey;
    opacity: 0.5;
    z-index: 100;
    border-radius: 10px;
    color: black;
    padding: 20px;
  }
`;

export default StyledChatList;
