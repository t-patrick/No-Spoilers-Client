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
    border: 3px solid var(--messagebox-border);
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

    form {
      border: 1px solid white;
      border-radius: 10px;
      padding: 15px;
      margin-top: 15px;
      input {
        border-radius: 10px;
        width: 65%;
        padding: 10px;
        margin-right: 15px;
        border: 1px solid var(--chatbox-border);
        background-color: transparent;
        color: white;
      }
      input: focus {
        outline: none;
      }
      /* button {
        color: white;
        background-color: var(--chatbox-border);
        border-radius: 5px;
        padding: 5px;
        border: none;
<<<<<<< HEAD
      } */
=======
      }
>>>>>>> origin/Ben_Chatbox-styling
    }

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
      .sender-name {
        font-size: 10px;
        color: var(--chatbox-color);
        text-align: left;
        font-weight: bold;
      }

      .message-content {
        margin-top: 5px;
        text-align: left;
      }

      .date {
        font-size: 10px;
        min-width: 37px;
        text-align: right;
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
    left: 10px;
    width: 320px;
    height: 10px;
    background-color: #204246;
    opacity: 0.5;
    z-index: 100;
    border-radius: 10px;
    color: black;
    padding: 10px 20px 20px 20px;
    border: 2px solid white;

    .mini-box {
<<<<<<< HEAD
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      /* button {
        border: none;
        color: white;
        background-color: transparent;
        font-size: 25px;
      } */
=======
      padding-bottom: 100px;
      button {
        border: none;
        color: white;
        background-color: transparent;
        font-size: 20px;
      }
>>>>>>> origin/Ben_Chatbox-styling
    }
  }
`;

export default StyledChatList;
