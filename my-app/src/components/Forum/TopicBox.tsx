import React from 'react';
import { TopicProps, TopicsProps } from '../../proptypes';
import StyledForumTopicList from './forumTopicList.styled';
import StyledTopicBox from './topicbox.styled';
import ForumReplies from './ForumReplies';

function TopicBox({ topic, userShow, showDetail }: TopicProps) {
  const upVote = () => {
    // send topic id
    // _id
  };

  const downVote = () => {
    // check user model if
    // topic id
    // _id
  };

  const addReply = () => {
    // topic id
    // reply body
    // userId
  };

  const renderRating = () => {};

  return (
    <StyledTopicBox>
      <div className="topic-main">
        <div className="text-container">
          <div className="score">
            <div>
              <button className="up" onClick={upVote}></button>
            </div>
            <div className="number">{topic.voteScore}</div>
            <div>
              <button className="down" onClick={downVote}></button>
            </div>
          </div>
          <div className="topic-header">
            <div className="title-and-date">
              <h3>{topic.title}</h3>
              <div>{topic.date.toDateString()}</div>
            </div>
            <div className="bottom-half">
              <div className="user-info">
                <div className="avatar">
                  <img
                    src={`https://avatars.dicebear.com/api/male/${topic.avatar}.svg`}
                  ></img>
                </div>
                <div>{topic.authorName}</div>
              </div>

              <div className="topic-content">
                <div>{topic.body}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ForumReplies topic={topic} showDetail={showDetail} userShow={userShow} />
    </StyledTopicBox>
  );
}

export default TopicBox;
