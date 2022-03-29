import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ChatState, MainState } from '../../proptypes';
import { ChatActionCreators } from '../../state/action-creators';
import StyledChatList from './chatlist.styled';

function ChatList() {
  const chat = useSelector<MainState>((state) => state.chat) as ChatState;
  const user = useSelector<MainState>((state) => state.user.user) as User;
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();
  const { addMessageAction } = bindActionCreators(ChatActionCreators, dispatch);

  const renderList = () => {
    console.log('the collection', chat.chatsCollection);
    return (
      <div className="show-list">
        {chat.chatsCollection.map((chats, index) => {
          return (
            <div key={index}>
              <section>{chats.showName}</section>
              <section>{renderChatter(chats.chats, chats.showName)}</section>
            </div>
          );
        })}
      </div>
    );
  };

  const renderMessages = (messages: Array<Message>) => {
    if (messages && messages.length > 0) {
      return (
        <div>
          {messages.map((message, index) => {
            return <div key={index}>{message.message}</div>;
          })}
        </div>
      );
    } else {
      return <></>;
    }
  };

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

  const renderChatter = (chatters: Array<Chat>, showName: string) => {
    return (
      <div>
        {chatters.map((chat, index) => {
          return (
            <div key={index}>
              <section>{chat.displayName} wants to chat</section>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></input>
              <button
                onClick={() =>
                  sendMessage(chat.chatterId, message, chat.showId, showName)
                }
              >
                Send
              </button>
              {renderMessages(chat.messages)}
            </div>
          );
        })}
      </div>
    );
  };

  return <StyledChatList>{renderList()}</StyledChatList>;
}

export default ChatList;
