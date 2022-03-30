import React, { SyntheticEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ChatProps, ChatState, MainState } from '../../proptypes';
import { ChatActionCreators } from '../../state/action-creators';
import spiderman from '../Splash/images/spiderman.jpeg';
import Button from '@mui/material/Button';

import { Motion, spring } from 'react-motion';
import styled from 'styled-components';

function Chat({ currentChat, toggleChat, showName, isChatOpen }: ChatProps) {
  const [isMinimised, setIsMinimised] = useState(false);
  const [message, setMessage] = useState<string>('');
  const dispatch = useDispatch();
  const { addMessageAction } = bindActionCreators(ChatActionCreators, dispatch);
  const user = useSelector<MainState>((state) => state.user.user) as User;
  const chat = useSelector<MainState>((state) => state.chat) as ChatState;

  const sendMessage = (
    receiver: string,
    messageText: string,
    showId: string,
    showName: string
  ) => {
    const message: Message = {
      senderId: user._id.toString(),
      displayName: user.displayName,
      avatar: user.avatar,
      message: messageText,
      receiverId: receiver,
      showId,
      showName,
      date: new Date(Date.now()),
    };
    addMessageAction(message);

    chat.socket.emit('message', message);
  };

  const handleSend = (e: SyntheticEvent) => {
    e.preventDefault();
    sendMessage(currentChat.chatterId, message, currentChat.showId, showName);
    setMessage('');
  };

  if (!isMinimised) {
    return (
      <Motion
        defaultStyle={{ y: 200, opacity: 0 }}
        style={{
          y: spring(isChatOpen ? 0 : 300, {
            damping: 6,
            stiffness: 120,
          }),
          opacity: isChatOpen ? 1 : 0,
        }}
      >
        {(style) => (
          <div
            className="chat-box"
            style={{
              backgroundImage: `url(${spiderman})`,
              opacity: style.opacity,
              transform: `translateY(${style.y}px)`,
            }}
          >
            <section className="chatter-info">
              <div className="user-name">{currentChat.displayName}</div>
              <div className="aux-btn">
                <button onClick={() => setIsMinimised(true)}>&#8211;</button>
                <button onClick={toggleChat}>X</button>
              </div>
            </section>

            <hr></hr>

            <section className="chatter-messages">
              {currentChat.messages.map((message, index) => {
                return <MessageBox message={message} key={index} />;
              })}
            </section>
            <form onSubmit={(e) => handleSend(e)}>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit" className="send-button">
                Send
              </button>
            </form>
          </div>
        )}
      </Motion>
    );
  } else {
    return (
      <div className="chat-box-minimised">
        <div className="mini-box">
          <button onClick={() => setIsMinimised(false)}>
            <section>{currentChat.displayName} - Breaking Bad</section>
          </button>
        </div>
      </div>
    );
  }
}

export default Chat;

const MessageBox = ({ message }: { message: Message }) => {
  const user = useSelector<MainState>((state) => state.user.user) as User;

  return (
    <StyledMessage user={message.senderId === user._id.toString()}>
      <div className="sender-name">{message.displayName}</div>
      <div className="message-content">{message.message}</div>
      <div className="date">
        {message.date && prettifyDate(new Date(message.date))}
      </div>
    </StyledMessage>
  );
};

const StyledMessage = styled.div<Props>`
  margin-top: 10px;
  margin-left: ${(p) => (p.user ? 'auto' : '0px')};
  border: 0.5px solid white;
  background-color: var(--chatbox-border);
  border-radius: 15px;
  padding: 10px 10px;
  border-bottom-left-radius: ${(p) => (p.user ? '15px' : '0px')};
  border-bottom-right-radius: ${(p) => (!p.user ? '15px' : '0px')};
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  white-space: wrap;

  .sender-name {
    font-size: 14px;
    color: var(--chatbox-color);
    text-align: left;
    font-weight: bold;
  }

  .message-content {
    margin-top: 5px;
    text-align: left;
    font-size: 12px;
  }

  .date {
    font-size: 10px;
    min-width: 37px;
    text-align: right;
  }
`;

interface Props {
  user: boolean;
}

function prettifyDate(date: Date) {
  // Returns the date in hh:mm am/pm format
  const options: {
    hour: any;
    minute: any;
  } = { hour: '2-digit', minute: '2-digit' };
  return date.toLocaleTimeString('en-US', options);
}
