import { DispatchProp } from 'react-redux';
import { ActionType } from '../action-types';
import { Dispatch } from 'redux';
import { Action } from '../actions';

export const setUserActionCreator = (user: User) => {
  return {
    type: ActionType.SET_CURRENT_USER,
    payload: user,
  };
};
