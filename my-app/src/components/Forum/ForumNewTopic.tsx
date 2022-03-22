import React, { SyntheticEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ForumNewTopicProps, ForumProps } from '../../proptypes';
import StyledForumNewTopic from './forumNewTopic.styled';

export default function ForumNewTopic({
  userShow,
  showDetail,
  updateTopics,
}: ForumNewTopicProps) {
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const [season, setSeason] = useState<number>();
  const [episode, setEpisode] = useState<number>();
  const [episodeDetail, setEpisodeDetail] = useState<Episode>({} as Episode);

  const user = useSelector<MainState>(
    (state) => state.user.user as User
  ) as User;

  useEffect(() => {
    if (userShow.episodeCodeUpTo) {
      const [season, episode] =
        userShow.episodeCodeUpTo &&
        userShow.episodeCodeUpTo
          .slice(1)
          .split('e')
          .map((n) => parseInt(n));

      setSeason(season as number);
      setEpisode(episode as number);

      setEpisodeDetail(
        showDetail.seasons[season as number].episodes[episode as number]
      );
    }
  }, [userShow]);

  const constructTopic = (): Topic => {
    return {
      title,
      body,
      TMDB_episode_id: episodeDetail.TMDB_episode_id,
      TMDB_show_id: userShow.TMDB_show_id,
      authorUserId: parseInt(userShow.userId),
      numberOfReplies: 0,
      date: new Date(Date.now()),
      voteScore: 0,
      authorName: user.displayName,
      avatar: user.avatar,
    };
  };

  const submit = (e: SyntheticEvent) => {
    e.preventDefault();

    const topicRequest: Topic = constructTopic();

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
