import { Dispatch, SetStateAction } from 'react';
import Episodechooser from './components/EpisodeChooser/Episodechooser';

/**
 * - UserTVShow[]
 * - goToTVShow
 */
export type ReelProps = {
  userTVShows: Array<UserTVShow>;
  isCompleted: boolean;
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
};

export type NavbarProps = {
  showSearch?: boolean;
};

export interface TopicsProps extends ForumProps {
  topics: UserTopic[];
}
export interface TopicProps {
  topic: UserTopic;
  topicVisible?: boolean;
}

export type BackintimeProps = {
  show: TVShow;
  currentEpisode: string;
};

export type ReplyProps = {
  reply: Reply;
  userTVShow: UserTVShow;
};

export type ForumContextType = {
  topics: Array<UserTopic>;
  updateTopics: (topic: UserTopic) => void;
  setTopics: Dispatch<SetStateAction<UserTopic[]>>;
  addReply: (topic: UserTopic, reply: Reply) => void;
  updateTopic: (topic: UserTopic) => void;
  deleteTopic: (topic: UserTopic) => void;
  deleteReply: (replyToDelete: Reply) => void;
};

export type CurrentShowContextType = {
  showDetail: TVShow;
  userTVShow: UserTVShow;
  setUserTVShow: Dispatch<SetStateAction<UserTVShow>>;
};

export type AvatarPropType = {
  setAvatar: Dispatch<SetStateAction<string>>;
};
