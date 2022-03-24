import React, { SyntheticEvent, useEffect, useState, useContext } from 'react';
import { useSelector } from 'react-redux';
import { ForumNewTopicProps, ForumProps } from '../../proptypes';
import StyledForumNewTopic from './forumNewTopic.styled';
import { CurrentShowContext } from '../Show/Show';
import { ForumContext } from '../Forum/Forum';

export default function ForumNewTopic() {
  const { userTVShow, showDetail } = useContext(CurrentShowContext);
  const { updateTopics } = useContext(ForumContext);

  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const [season, setSeason] = useState<number>();
  const [episode, setEpisode] = useState<number>();
  const [episodeDetail, setEpisodeDetail] = useState<Episode>({} as Episode);

  const user = useSelector<MainState>(
    (state) => state.user.user as User
  ) as User;

  useEffect(() => {
    if (userTVShow.episodeCodeUpTo) {
      const [seas, ep] =
        userTVShow.episodeCodeUpTo &&
        userTVShow.episodeCodeUpTo
          .slice(1)
          .split('e')
          .map((n) => parseInt(n));

      seas && setSeason((seas as number) - 1);
      ep && setEpisode(ep as number);

      season &&
        episode &&
        setEpisodeDetail(
          showDetail.seasons[season as number].episodes[episode as number]
        );
    }
  }, [userTVShow]);

  // TODO change id so it is not hardcoded
  const constructTopic = (): UserTopic => {
    return {
      _id: 1,
      title,
      body,
      TMDB_episode_id: userTVShow.episodeIdUpTo,
      TMDB_show_id: userTVShow.TMDB_show_id,
      authorUserId: userTVShow.userId,
      authorName: user.displayName,
      episodeCode: userTVShow.episodeCodeUpTo,
      numberOfReplies: 0,
      avatar: user.avatar,
      date: new Date(),
      voteScore: 0,
      upVoteIds: [],
      downVoteIds: [],
      replies: [],
      isReported: false,
      userVote: 0,
    };
  };

  const submit = (e: SyntheticEvent) => {
    e.preventDefault();

    const topicRequest: UserTopic = constructTopic();

    updateTopics(topicRequest);

    setTitle('');
    setBody('');

    // Submit to API
  };

  return (
    <StyledForumNewTopic>
      <form>
        <div className="title">
          <div>Title</div>
          <textarea onChange={(e) => setTitle(e.target.value)} value={title} />
        </div>

        <div className="body">
          <div>Body</div>
          <textarea onChange={(e) => setBody(e.target.value)} value={body} />
        </div>

        <div className="btn">
          <button type="submit" onClick={(e) => submit(e)}>
            Create Topic
          </button>
        </div>
      </form>
    </StyledForumNewTopic>
  );
}
