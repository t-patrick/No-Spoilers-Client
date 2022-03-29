import { Socket } from 'socket.io-client';
import { ChatState } from '../../proptypes';
import { ChatActionType } from '../action-types';
import { ChatAction } from '../actions';

const defaultState = {
  isPaused: false,
  socket: {} as Socket,
  chatsCollection: [],
};

const chatReducer = (state: ChatState = defaultState, action: ChatAction) => {
  switch (action.type) {
    case ChatActionType.ADD_SHOW_CHATS: {
      const newState = { ...state };
      newState.chatsCollection.push(action.payload);
      return newState;
    }

    case ChatActionType.SET_SHOW_CHATS: {
      const newState = { ...state };
      newState.chatsCollection = action.payload;
      return newState;
    }

    case ChatActionType.REMOVE_SHOW_CHATS: {
      const newState = { ...state };
      const index = newState.chatsCollection.findIndex(
        (show) => action.payload.showId === show.showId
      );
      newState.chatsCollection.splice(index, 1);
      return newState;
    }

    case ChatActionType.REMOVE_ALL: {
      const newState = { ...state };
      newState.chatsCollection = [];
      return newState;
    }

    case ChatActionType.ADD_MESSAGE: {
      const newState = { ...state };
      console.log(action.payload);
      const show = newState.chatsCollection.find(
        (show) => show.showId === action.payload.showId.toString()
      ) as TVShowChats;
      console.log('show', show);
      const chatter = show?.chats.find(
        (chat) => chat.chatterId === action.payload.senderId.toString()
      ) as Chat;
      console.log('chatter', chatter);
      chatter.messages.push(action.payload);
      return newState;
    }

    case ChatActionType.SET_MESSAGES: {
      const newState = { ...state };
      const show = newState.chatsCollection.find(
        (show) => show.showId === action.payload[0].showId
      ) as TVShowChats;
      const chatter = show?.chats.find(
        (chat) => chat.chatterId === action.payload[0].senderId
      ) as Chat;
      chatter.messages = action.payload;
      return newState;
    }

    case ChatActionType.ADD_CHAT: {
      const newState = { ...state };
      console.log(newState.chatsCollection);
      console.log(action.payload.showId);
      const show = newState.chatsCollection.find(
        (show) => show.showId === action.payload.showId.toString()
      ) as TVShowChats;
      show.chats.push(action.payload);
      return newState;
    }

    case ChatActionType.REMOVE_CHAT: {
      const newState = { ...state };
      const show = newState.chatsCollection.find(
        (show) => show.showId === action.payload.showId
      ) as TVShowChats;
      const index = show?.chats.findIndex(
        (chat) => chat.chatterId === action.payload.chatterId
      );

      show.chats.splice(index, 1);
      return newState;
    }

    case ChatActionType.SET_SOCKET: {
      const newState = { ...state };
      newState.socket = action.payload;
      return newState;
    }
    default:
      return state;
  }
};

export default chatReducer;
