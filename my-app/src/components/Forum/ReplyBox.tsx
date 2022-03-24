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

function ReplyBox({ reply, userShow }: ReplyProps) {
  const user = useSelector<MainState>((state) => state.user.user);

  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  const isReplierFurtherAlong = () => {
    return reply.replierEpisodeUpTo > userShow.episodesWatchedSoFar;
  };

  const renderReplierProgress = () => {
    const diff = Math.abs(
      reply.replierEpisodeUpTo - userShow.episodesWatchedSoFar
    );

    if (reply.replierEpisodeUpTo > userShow.episodesWatchedSoFar) {
      return (
        <>
          they are{' '}
          <span className="replier-progress-ahead replier-progress">
            {diff} episodes ahead of you
          </span>
        </>
      );
    }

    if (reply.replierEpisodeUpTo < userShow.episodesWatchedSoFar) {
      return (
        <>
          they are{' '}
          <span className="replier-progress-behind replier-progress">
            {diff} episodes behind you
          </span>{' '}
        </>
      );
    }

    return (
      <>
        they are{' '}
        <span className="replier-progress-same replier-progress">
          on the same episode
        </span>{' '}
      </>
    );
  };

  useEffect(() => {
    userShow && setIsExpanded(!isReplierFurtherAlong());
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
            Reply from: {reply.authorName}, {renderReplierProgress()}
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
