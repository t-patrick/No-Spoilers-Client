import React, { useState } from 'react';
import { ChatProps } from '../../proptypes';
import spiderman from '../Splash/images/spiderman.jpeg';


function Chat({ currentChat, toggleChat }: ChatProps) {
  const [isMinimised, setIsMinimised] = useState(false);

  if (!isMinimised) {
    return (
      <div className="chat-box" style={{
        backgroundImage: `url(${spiderman})`,
      }}>
        <section className='chatter-info' >
          <div className='user-name'>
            {currentChat.displayName}
          </div>
          <div className='aux-btn'>
            <button onClick={() => setIsMinimised(true)}>-</button>
            <button onClick={toggleChat}>x</button>
          </div>
        </section>

        <hr></hr>
        
        <section className='chatter-messages'>
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
