import { SouthWest } from '@mui/icons-material';
import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from '@mui/material';
import React, { MouseEventHandler, SyntheticEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import { convertToObject } from 'typescript/lib/tsserverlibrary';
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
            date: new Date(),
          },
          {
            avatar: 'asdf',
            displayName: 'Tim',
            receiverId: '1',
            senderId: '2',
            message: 'Hi Hank',
            showId: '123',
            showName: 'Breaking Bad',
            date: new Date(),
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
            date: new Date(),
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
  const { addMessageAction, setCurrentShowChatAction, openSidebar } =
    bindActionCreators(ChatActionCreators, dispatch);

  const setChatOpen = (chats: Chat, e: SyntheticEvent) => {
    console.log(e);
    if (isChatOpen) {
      setIsChatOpen(false);
      return;
    }
    setCurrentChatter(chats);
    setIsChatOpen(true);
  };

  const renderList = () => {
    return (
      <div className="chatter-list">
        {chat.currentShowChat.showName &&
          chat.currentShowChat.chats.map((chat, index) => {
            return (
              <ChatterPane key={index} setChatOpen={setChatOpen} chat={chat} />
            );
          })}
      </div>
    );
  };

  const updateShow = (name: string) => {
    const collection = chat.chatsCollection.find(
      (show) => show.showName === name
    );

    if (collection) setCurrentShowChatAction(collection);
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  if (chat.sidebarOpen) {
    return (
      <StyledChatList>
        {/* Chat is fixed */}
        {isChatOpen && currentChatter && (
          <Chat
            toggleChat={toggleChat}
            showName={currentShowChats.showName}
            currentChat={currentChatter}
            isChatOpen={isChatOpen}
          />
        )}
        {/* Choose which show */}
        {chat.chatsCollection.length > 0 && (
          <FormControl
            sx={{
              m: 1,
              width: 300,
              backgroundColor: '#c6cbd2',
              borderRadius: '10px',
              boxShadow: '2px 2px 2px rgba(255, 255, 255, 0.4)',
              marginBottom: 5,
            }}
          >
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              value={chat.currentShowChat.showName || ''}
              onChange={(e) => updateShow(e.target.value as string)}
              input={
                <OutlinedInput
                  sx={{
                    color: 'grey',
                    fontSize: 20,
                    letterSpacing: 1,
                    fontWeight: 500,
                  }}
                  label="Name"
                />
              }
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
        {chat.chatsCollection.length > 0 ? (
          <h2>Currently Online:</h2>
        ) : (
          <h2>Add from the Show Page!</h2>
        )}
        {chat.currentShowChat && renderList()}
      </StyledChatList>
    );
  }

  const openChatCollection = (collection: TVShowChats) => {
    openSidebar(collection.showId);
  };

  return (
    <div className="mini">
      {isChatOpen && currentChatter && (
        <Chat
          toggleChat={toggleChat}
          showName={currentShowChats.showName}
          currentChat={currentChatter}
          isChatOpen={isChatOpen}
        />
      )}
      {chat.chatsCollection.map((collection, index) => {
        return (
          <Button key={index} onClick={() => openChatCollection(collection)}>
            {collection.showName} <br />({collection.chats.length} online)
          </Button>
        );
      })}
    </div>
  );
}

export default ChatList;

const ChatterPane = ({
  chat,
  setChatOpen,
}: {
  chat: Chat;
  setChatOpen: (chats: Chat, e: SyntheticEvent) => void;
}) => {
  return (
    <div className="chatter-pane" onClick={(e) => setChatOpen(chat, e)}>
      <img
        src={`https://avatars.dicebear.com/api/${chat.avatar}`}
        className="avatar"
      />
      <h2>{chat.displayName}</h2>
    </div>
  );
};

const Button = styled.button`
  width: 120px;
  height: 86px;
  font-size: 14px;
  background: linear-gradient(
    45deg,
    transparent 5%,
    #3a3c3e 5%,
    #3a3c3e 30%,
    #4d4f51
  );
  border: 0;
  color: #fff;
  letter-spacing: 3px;
  box-shadow: 6px 0px 0px var(--sharp-purple);
  outline: transparent;
  position: relative;
  margin: 0px auto;
`;
