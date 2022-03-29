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
            <button onClick={() => setIsMinimised(true)}>&#8211;</button>
            <button onClick={toggleChat}>X</button>
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
        <div className='mini-box'>
          <button onClick={() => setIsMinimised(false)}>
            <section>{currentChat.displayName}</section>
          </button>
        </div>
      </div>
    );
  }
}

export default Chat;
