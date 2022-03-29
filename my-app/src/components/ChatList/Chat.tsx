import React, { SyntheticEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ChatProps, ChatState, MainState } from '../../proptypes';
import { ChatActionCreators } from '../../state/action-creators';

function Chat({ currentChat, toggleChat, showName }: ChatProps) {
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
      <div className="chat-box">
        <section>
          {currentChat.displayName}
          <button onClick={() => setIsMinimised(true)}>Minimise</button>
          <button onClick={toggleChat}>Close</button>
        </section>
        <section>
          {currentChat.messages.map((message, index) => {
            return <p key={index}>{message.message}</p>;
          })}
        </section>
        <form onSubmit={(e) => handleSend(e)}>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    );
  } else {
    return (
      <div className="chat-box-minimised">
        <button onClick={() => setIsMinimised(false)}>Open</button>
        <section>{currentChat.displayName}</section>
      </div>
    );
  }
}

export default Chat;
