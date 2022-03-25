import React, { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { TopicProps, TopicsProps } from '../../proptypes';
import StyledForumTopicList from './forumTopicList.styled';
import StyledTopicBox from './topicbox.styled';
import ForumReplies from './ForumReplies';
import { downVotePost, upVotePost } from '../../API/user-api';
import { ForumContext } from '../../App';

function TopicBox({ topic }: TopicProps) {
  const user = useSelector<MainState>((state) => state.user.user) as User;
  const { updateTopic } = useContext(ForumContext);
  const [topicVisible, setTopicVisible] = useState<boolean>(!topic.isReported);

  const vote = async (vote: number) => {
    // send topic id
    // _id

    let response;

    if (vote === 1) {
      response = await upVotePost(
        user._id.toString(),
        topic._id?.toString() as string
      );
    } else {
      response = await downVotePost(
        user._id.toString(),
        topic._id?.toString() as string
      );
    }

    if (response) {
      const updatedTopic = Object.assign({}, topic);
      updatedTopic.voteScore += vote;
      updateTopic(updatedTopic);
    }
  };

  return topic ? (
    <StyledTopicBox>
      <div className="topic-main">
        <div className="text-container">
          <div className="score">
            <div>
              <button className="up" onClick={() => vote(1)}></button>
            </div>
            <div className="number">{topic.voteScore}</div>
            <div>
              <button className="down" onClick={() => vote(-1)}></button>
            </div>
          </div>

          <div
            className="topic-header"
            onClick={() => setTopicVisible(!topicVisible)}
          >
            <button>Remove</button>
            <div className="title-and-date">
              <h3>
                {topic.isReported
                  ? 'This topic has been reported for possible spoiler, awaiting review. Click to reveal'
                  : topic.title}{' '}
                (Posting about {topic.episodeCode})
              </h3>
              <div>{new Date(topic.date).toDateString()}</div>
            </div>

            <div
              style={{ display: topicVisible ? 'flex' : 'none' }}
              className="bottom-half"
            >
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
  ) : (
    <></>
  );
}

export default TopicBox;
