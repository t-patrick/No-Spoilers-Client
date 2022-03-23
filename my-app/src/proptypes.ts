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

export interface ForumNewTopicProps extends ForumProps {
  updateTopics: (topic: UserTopic) => void;
}

export type EpisodechooserProps = {
  seasons: Array<Season>;
  userShow: UserTVShow;
  setUserTVShow: Dispatch<SetStateAction<UserTVShow>>;
};

export type NavbarProps = {
  showSearch?: boolean;
};

export interface TopicsProps extends ForumProps {
  topics: UserTopic[];
}
export interface TopicProps extends ForumProps {
  topic: UserTopic;
}

export type BackintimeProps = {
  show: TVShow;
  currentEpisode: string;
};

export type ReplyProps = {
  reply: Reply;
};
