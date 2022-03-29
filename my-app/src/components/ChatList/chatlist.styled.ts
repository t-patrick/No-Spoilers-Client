import styled from 'styled-components';

const StyledChatList = styled.div`
  text-align: center;

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

  .chatter-pane {
    color: white;
  }

  .chatter-list {
    margin-top: 0;
  }

  h2 {
    color: white;
    text-align: left;
    margin-left: 10px;
    font-size: 16px;
  }

  .chat-box {
    border: 3px solid var(--chatbox-border);
    display: block;
    position: fixed;
    bottom: 10px;
    left: 420px;
    width: 300px;
    height: 600px;
    z-index: 100;
    border-radius: 10px;
    color: white;
    padding: 40px;

    .chatter-info {
      display: flex;
      justify-content: space-between;
      button {
        border: none;
        background-color: transparent;
        color: white;
        font-size: 20px;
      }
      .user-name {
        padding-left: 5px;
        font-size: 20px;
      }
      .aux-btn {
        margin-right: 5px;
      }
    }

    .chatter-messages {
      height: 500px;
      border: 1px solid white;
      border-radius: 10px;
      padding-left: 20px;
      padding-right: 20px;
      margin-bottom: 15px;
      overflow: scroll;
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
      /* Hide scrollbar for Chrome, Safari and Opera */
      ::-webkit-scrollbar {
        display: none;
      }

      p {
        border: 0.5px solid white;
        background-color: var(--chatbox-border);
        border-radius: 15px;
        padding: 10px;
        border-bottom-left-radius: 0;
      }
    }
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
    width: 150px;
    height: 80px;
    background-color: #204246;
    opacity: 0.5;
    z-index: 100;
    border-radius: 10px;
    color: black;
    padding: 20px;
    border: 3px solid white;

    .mini-box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      button {
        border: none;
        color: white;
        background-color: transparent;
        font-size: 25px;
      }
    }
  }
`;

export default StyledChatList;
