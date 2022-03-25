import React, { useState} from 'react';
import { useSelector } from 'react-redux';
import { TopicProps, TopicsProps } from '../../proptypes';
import StyledForumTopicList from './forumTopicList.styled';
import StyledTopicBox from './topicbox.styled';
import ForumReplies from './ForumReplies';

function TopicBox({ topic }: TopicProps) {
  const user = useSelector<MainState>((state) => state.user.user) as User;

  const upVote = () => {
    // send topic id
    // _id

    if (topic.authorUserId === user._id.toString() || topic.userVote === 1) {
      // Cancel action
      return;
    }

    // Otherwise. upvote. Take response and update state.
  };

  const downVote = () => {
    // check user model if
    // topic id
    // _id

    if (topic.authorUserId === user._id.toString() || topic.userVote === -1)
      return;
  };

  // const [topicList, setTopicList] = useState(topic);
  // const handleRemoveTopic = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const topicBody = e.target.getAttribute('topic.body');
  //   setTopicList(topicList.filter(item => item.body !== topic.body));
  // };

  //deleting a topic
  const [topicList, setTopicList] = useState(true);
  const handleRemoveTopic = () => {
    setTopicList(!topicList);
  }

  return (
    < StyledTopicBox>
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

              <button onClick={handleRemoveTopic}>Remove</button>

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

      <ForumReplies topic={topic} />
    </StyledTopicBox>
  );
}

export default TopicBox;
