import { Dispatch, SetStateAction } from 'react';

/**
 * - UserTVShow[]
 * - goToTVShow
 */
export type ReelProps = {
  userTVShows: Array<UserTVShow>;
};

export type LoginProps = {
  setLoginOrRegister: Dispatch<SetStateAction<'login' | 'register'>>;
};
