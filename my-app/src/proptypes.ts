import { Dispatch, SetStateAction } from 'react';
import Episodechooser from './components/EpisodeChooser/Episodechooser';

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

export type ForumProps = {
  showDetail: TVShow;
  userShow: UserTVShow;
};

export type EpisodechooserProps = {
  seasons: Array<Season>;
  userShow: UserTVShow;
};
