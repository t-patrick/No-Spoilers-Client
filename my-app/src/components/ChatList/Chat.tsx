import React, { useState } from 'react';
import { ChatProps } from '../../proptypes';

function Chat({ currentChat, toggleChat }: ChatProps) {
  const [isMinimised, setIsMinimised] = useState(false);

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
