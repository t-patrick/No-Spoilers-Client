import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { ReplyProps } from '../../proptypes';
import { useSelector } from 'react-redux';
import StyledReplyBox from './reply-box.styled';
import Reply from '@material-ui/icons/Reply';

// Needs the conditional

function ReplyBox({ reply, userTVShow }: ReplyProps) {
  const user = useSelector<MainState>((state) => state.user.user) as User;

  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  const isReplierFurtherAlong = () => {
    return reply.replierEpisodeUpTo > userTVShow.episodesWatchedSoFar;
  };

  const isReplierTheUser = () => {
    return reply.authorUserId === user._id;
  };

  const renderReplierProgress = () => {
    const diff = Math.abs(
      reply.replierEpisodeUpTo - userTVShow.episodesWatchedSoFar
    );

    if (reply.replierEpisodeUpTo > userTVShow.episodesWatchedSoFar) {
      return (
        <>
          {isReplierTheUser() ? 'you ' : 'they '} are{' '}
          <span className="replier-progress-ahead replier-progress">
            {diff} episodes ahead of you
          </span>
        </>
      );
    }

    if (reply.replierEpisodeUpTo < userTVShow.episodesWatchedSoFar) {
      return (
        <>
          {isReplierTheUser() ? 'you ' : 'they '} are{' '}
          <span className="replier-progress-behind replier-progress">
            {diff} episodes behind you
          </span>{' '}
        </>
      );
    }

    return (
      <>
        {isReplierTheUser() ? 'you' : 'they'} are
        <span className="replier-progress-same replier-progress">
          on the same episode
        </span>{' '}
      </>
    );
  };

  useEffect(() => {
    userTVShow && setIsExpanded(!isReplierFurtherAlong());
  }, []);

  return (
    <StyledReplyBox>
      <Accordion
        expanded={isExpanded}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="reply-summary"
        >
          <Typography>
            <Reply />
            Reply from {isReplierTheUser() ? 'You' : reply.authorName},{' '}
            {renderReplierProgress()}
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="reply-content">
          <Typography>{reply.body}</Typography>
        </AccordionDetails>
      </Accordion>
    </StyledReplyBox>
  );
}

export default ReplyBox;
