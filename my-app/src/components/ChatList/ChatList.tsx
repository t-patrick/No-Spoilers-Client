import { SouthWest } from '@mui/icons-material';
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
  const [currentShowChats, setCurrentShowChats] = useState<TVShowChats>(
    {} as TVShowChats
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
        {currentShowChats.showName &&
          currentShowChats.chats.map((chats, index) => {
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

  const updateShow = (name: string) => {
    const collection = chat.chatsCollection.find(
      (show) => show.showName === name
    );

    if (collection) setCurrentShowChats(collection);
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <StyledChatList>
      {/* Chat is fixed */}
      {isChatOpen && currentChatter && (
        <Chat
          toggleChat={toggleChat}
          showName={currentShowChats.showName}
          currentChat={currentChatter}
        />
      )}
      {/* Choose which show */}
      {chat.chatsCollection.length && (
        <FormControl sx={{ m: 1, width: 300, backgroundColor: 'white' }}>
          <InputLabel id="demo-multiple-name-label">Show</InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            value={currentShowChats.showName || ''}
            onChange={(e) => updateShow(e.target.value as string)}
            input={<OutlinedInput label="Name" />}
          >
            {chat.chatsCollection.map((chatter, index) => (
              <MenuItem key={index} value={chatter.showName}>
                {chatter.showName}
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
