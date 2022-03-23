import React, { useState } from 'react';
import ForumNewTopic from './ForumNewTopic';
import ForumTopicList from './ForumTopicList';
import StyledForum from './forum.styled';
import { ForumProps } from '../../proptypes';
import { useSelector } from 'react-redux';
import { dummyTopics } from './mocks';

function Forum({ showDetail, userShow }: ForumProps) {
  const user = useSelector<MainState>((state) => state.user.user) as User;

  const [topics, setTopics] = useState<Array<UserTopic>>([]);

  /* 
    Use effect to set topics
  */

  const updateTopics = (topic: UserTopic) => {
    setTopics([...topics, topic]);
  };

  return (
    <StyledForum>
      <h2>
        {showDetail.name}: Next Episode: {userShow.episodeCodeNext}
      </h2>
      <ForumNewTopic
        userShow={userShow}
        showDetail={showDetail}
        updateTopics={updateTopics}
      />
      <ForumTopicList
        topics={topics}
        userShow={userShow}
        showDetail={showDetail}
      />
    </StyledForum>
  );
}

export default Forum;
