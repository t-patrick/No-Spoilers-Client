import React from 'react';
import { TopicsProps } from '../../proptypes';
import StyledForumTopicList from './forumTopicList.styled';
import replyTo from './image/icon.png';
import TopicBox from './TopicBox';

import ForumReplies from './ForumReplies';

function ForumTopicList({ topics, userShow, showDetail }: TopicsProps) {
  const renderTopic = (topic: Topic, index: number) => {
    return (
        <TopicBox
          key={index}
          topic={topic}
          showDetail={showDetail}
          userShow={userShow}
        />
    );
  };

  const renderTopics = () => {
    return topics.map((topic, index) => renderTopic(topic, index));
  };

  return <StyledForumTopicList>{renderTopics()}</StyledForumTopicList>;
}

export default ForumTopicList;
