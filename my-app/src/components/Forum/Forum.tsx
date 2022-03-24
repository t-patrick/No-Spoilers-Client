import React, { createContext, useContext, useState } from 'react';
import ForumNewTopic from './ForumNewTopic';
import ForumTopicList from './ForumTopicList';
import StyledForum from './forum.styled';
import { ForumContextType, ForumProps } from '../../proptypes';
import { useSelector } from 'react-redux';
import { CurrentShowContext } from '../Show/Show';
// import { dummyTopics } from './mocks';

export const ForumContext = createContext<ForumContextType>(
  {} as ForumContextType
);

function Forum() {
  const user = useSelector<MainState>((state) => state.user.user) as User;

  const { showDetail, userTVShow } = useContext(CurrentShowContext);

  const [topics, setTopics] = useState<Array<UserTopic>>([]);

  /* 
    Use effect to set topics
  */

  const updateTopics = (topic: UserTopic) => {
    setTopics([...topics, topic]);
  };

  const addReply = (topicToUpdate: UserTopic, reply: Reply) => {
    const topicsCopy = [...topics];
    topicsCopy
      .find((topic) => topic._id === topicToUpdate._id)
      ?.replies.push(reply);
    setTopics(topicsCopy);
  };

  return (
    <ForumContext.Provider
      value={{
        topics: topics,
        setTopics: setTopics,
        updateTopics: updateTopics,
        addReply: addReply,
      }}
    >
      <StyledForum>
        <h2>
          {showDetail.name}: Next Episode: {userTVShow.episodeCodeNext}
        </h2>
        <ForumNewTopic />
        <ForumTopicList />
      </StyledForum>
    </ForumContext.Provider>
  );
}

export default Forum;
