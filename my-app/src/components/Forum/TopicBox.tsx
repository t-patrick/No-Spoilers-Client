import React, { SyntheticEvent, useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { TopicProps, TopicsProps } from '../../proptypes';
import StyledForumTopicList from './forumTopicList.styled';
import StyledTopicBox from './topicbox.styled';
import ForumReplies from './ForumReplies';
import { deleteTopics, downVotePost, upVotePost } from '../../API/user-api';
import { ForumContext } from '../../App';

function TopicBox({ topic }: TopicProps) {
  const user = useSelector<MainState>((state) => state.user.user) as User;
  const { updateTopic, topics, deleteTopic } = useContext(ForumContext);
  const [topicVisible, setTopicVisible] = useState<boolean>(!topic.isReported);

  useEffect(() => {
    setTopicVisible(!topic.isReported);
  }, [topics]);

  const vote = async (e: SyntheticEvent, vote: number) => {
    e.stopPropagation();
    e.preventDefault();

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

  const deleteTopicHandler = async () => {
    const confirm = await deleteTopics(topic);

    if (confirm) deleteTopic(topic);
  };

  return topic ? (
    <StyledTopicBox>
      <div className="topic-main">
        <div className="text-container">
          <div
            className="score"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
            }}
          >
            <div onClick={(e) => vote(e, 1)}>
              <button className="up"></button>
            </div>
            <div className="number">{topic.voteScore}</div>
            <div onClick={(e) => vote(e, -1)}>
              <button className="down"></button>
            </div>
          </div>

          <div
            className="topic-header"
            onClick={() => setTopicVisible(!topicVisible)}
          >
            <div className="title-and-date">
              <div className="top-row">
                <h3>
                  {topic.isReported
                    ? 'This topic has been reported for possible spoiler, awaiting review. Click to reveal'
                    : topic.title}{' '}
                  (Posting about {topic.episodeCode})
                </h3>
                {topic.authorUserId === user._id.toString() && (
                  <div className="user-buttons">
                    <button
                      className="remove-button"
                      onClick={() => deleteTopicHandler()}
                    >
                      Delete Post
                    </button>
                    <button
                      className="edit-button"
                      onClick={() => deleteTopicHandler()}
                    >
                      Edit
                    </button>
                  </div>
                )}
              </div>
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

      <ForumReplies topic={topic} topicVisible={topicVisible} />
    </StyledTopicBox>
  ) : (
    <></>
  );
}

export default TopicBox;
