import React, { useContext, useState } from 'react';
import { TopicsProps } from '../../proptypes';
import StyledForumTopicList from './forumTopicList.styled';
import replyTo from './image/icon.png';
import TopicBox from './TopicBox';

import ForumReplies from './ForumReplies';
import { ForumContext } from './Forum';

function ForumTopicList() {
  const { topics } = useContext(ForumContext);

  const renderTopic = (topic: UserTopic, index: number) => {
    return <TopicBox key={index} topic={topic} />;
  };

  const renderTopics = () => {
    return topics.map((topic, index) => renderTopic(topic, index));
  };



  return (
    <StyledForumTopicList>

      {renderTopics()}
    </StyledForumTopicList>
  );
}

export default ForumTopicList;

