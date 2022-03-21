import { DispatchProp } from 'react-redux';
import { ActionType } from '../action-types';
import { Dispatch } from 'redux';
import { Action } from '../actions';

export const setUserAction = (payload: User) => {
  return {
    type: ActionType.SET_CURRENT_USER,
    payload,
  };
};
export const updateUserAction = (payload: User) => {
  return {
    type: ActionType.UPDATE_USER,
    payload,
  };
};
export const setUserTVShowsAction = (payload: User) => {
  return {
    type: ActionType.SET_USER_TV_SHOWS,
    payload,
  };
};

export const logoutAction = () => {
  return {
    type: ActionType.LOGOUT,
  };
};

export const updateUserShowAction = (payload: UserTVShow) => {
  return {
    type: ActionType.UPDATE_USER_SHOW,
    payload,
  };
};

export const addUserShowAction = (payload: UserTVShow) => {
  return {
    type: ActionType.ADD_USER_SHOW,
    payload,
  };
};

export const removeUserShowAction = (payload: UserTVShow | number) => {
  return {
    type: ActionType.REMOVE_USER_SHOW,
    payload,
  };
};
