import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ChatState, MainState } from '../../proptypes';
import { ChatActionCreators } from '../../state/action-creators';
import Chat from './Chat';
import StyledChatList from './chatlist.styled';

const mockShows: Array<CurrentShowChats> = [
  {
    name: 'Breaking Bad',
    chatters: [
      {
        chatterId: '1',
        avatar: 'asdf',
        displayName: 'Hank',
        showId: '123',
        messages: [
          {
            avatar: 'asdf',
            displayName: 'Hank',
            receiverId: '2',
            senderId: '1',
            message: 'Hello',
            showId: '123',
            showName: 'Breaking Bad',
          },
          {
            avatar: 'asdf',
            displayName: 'Tim',
            receiverId: '1',
            senderId: '2',
            message: 'Hi Hank',
            showId: '123',
            showName: 'Breaking Bad',
          },
        ],
      },
      {
        chatterId: '1',
        avatar: 'fdaa',
        displayName: 'Marie',
        showId: '123',
        messages: [
          {
            avatar: 'asdf',
            displayName: 'Marie',
            receiverId: '2',
            senderId: '1',
            message: 'HUH',
            showId: '123',
            showName: 'Breaking Bad',
          },
        ],
      },
    ],
  },
];

function ChatList() {
  const chat = useSelector<MainState>((state) => state.chat) as ChatState;
  const user = useSelector<MainState>((state) => state.user.user) as User;
  const [shows, setShows] = useState(mockShows); // Will get this from redux instead of mocks
  const [currentShowChats, setCurrentShowChats] = useState<CurrentShowChats>(
    {} as CurrentShowChats
  );
  const [currentChatter, setCurrentChatter] = useState<Chat>();

  const [isChatOpen, setIsChatOpen] = useState(false);

  const dispatch = useDispatch();
  const { addMessageAction } = bindActionCreators(ChatActionCreators, dispatch);

  const setChatOpen = (chats: Chat) => {
    setCurrentChatter(chats);
    setIsChatOpen(true);
  };

  const renderList = () => {
    return (
      <div className="show-list">
        {currentShowChats.name &&
          currentShowChats.chatters.map((chats, index) => {
            return (
              <div key={index} className="show-item">
                <section className="show-header">
                  <button onClick={() => setChatOpen(chats)}>
                    {chats.displayName}
                  </button>
                </section>
              </div>
            );
          })}
      </div>
    );
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

  const updateShow = (name: string) => {
    console.log(name);
    setCurrentShowChats(
      mockShows.find((chatter) => chatter.name === name) as CurrentShowChats
    );
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <StyledChatList>
      {/* Chat is fixed */}
      {isChatOpen && currentChatter && (
        <Chat toggleChat={toggleChat} currentChat={currentChatter} />
      )}
      {/* Choose which show */}
      {shows.length && (
        <FormControl sx={{ m: 1, width: 300, backgroundColor: 'white' }}>
          <InputLabel id="demo-multiple-name-label">Show</InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            value={currentShowChats.name || ''}
            onChange={(e) => updateShow(e.target.value as string)}
            input={<OutlinedInput label="Name" />}
          >
            {shows.map((chatter, index) => (
              <MenuItem key={index} value={chatter.name}>
                {chatter.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
      {/* List of chatters connected to that show */}
      {currentShowChats && renderList()}
    </StyledChatList>
  );
}

export default ChatList;
