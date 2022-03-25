import React, { useContext, useEffect } from 'react';
import { TopicsProps } from '../../proptypes';
import StyledForumTopicList from './forumTopicList.styled';
import replyTo from './image/icon.png';
import TopicBox from './TopicBox';

import ForumReplies from './ForumReplies';
import { ForumContext } from '../../App';

function ForumTopicList() {
  const { topics } = useContext(ForumContext);
  useEffect(() => {
    console.log(topics);
  }, []);

  const renderTopic = (topic: UserTopic, index: number) => {
    return <TopicBox key={index} topic={topic} />;
  };

  const renderTopics = () => {
    if (topics && topics.length) {
      return topics.map((topic, index) => renderTopic(topic, index));
    }
    return <></>;
  };

  return (
    <StyledForumTopicList>{topics && renderTopics()}</StyledForumTopicList>
  );
}

export default ForumTopicList;
