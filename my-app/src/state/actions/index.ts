import { ActionType } from '../action-types';

/**
 * On Login, all user info and shows
 */
interface SetUserAction {
  type: ActionType.SET_CURRENT_USER;
  payload: User;
}

/**
 * + For updating user info, excluding the shows.
 */

interface UpdateUserAction {
  type: ActionType.UPDATE_USER;
  payload: BasicUserInfo;
}

/**
 * Updating all shows
 */

interface SetUserTVShowsAction {
  type: ActionType.SET_USER_TV_SHOWS;
  payload: UserTVShow[];
}

/**
 * Updating one show
 * + Set is completed
 * + update episode
 */

interface UpdateUserShowAction {
  type: ActionType.UPDATE_USER_SHOW;
  payload: UserTVShow;
}

interface LogoutAction {
  type: ActionType.LOGOUT;
}
interface RemoveUserShowAction {
  type: ActionType.REMOVE_USER_SHOW;
  payload: number | UserTVShow;
}

interface AddUserShowAction {
  type: ActionType.ADD_USER_SHOW;
  payload: UserTVShow;
}

export type Action =
  | SetUserAction
  | UpdateUserAction
  | SetUserTVShowsAction
  | UpdateUserShowAction
  | LogoutAction
  | RemoveUserShowAction
  | AddUserShowAction;

/* 

const ActionType = {
  SET_CURRENT_USER: "set_user",
  LOGIN: "login",
  LOGOUT: "logout",
  ADD_USER_SHOW: "add_user_show",
  REMOVE_USER_SHOW: "remove_user_show",
  SET_SHOW_COMPLETED: "set-show-completed",
  UPDATE_SHOW_EPISODE: "update_show_episode",
};

*/
