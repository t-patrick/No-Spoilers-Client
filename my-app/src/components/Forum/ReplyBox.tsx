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
import Button from '@mui/material/Button';
import redFlag from './image/red-flag.png';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';







// Needs the conditional

function ReplyBox({ reply, userTVShow }: ReplyProps) {
  const [reportFormOpen, setReportFormOpen] = useState(false);

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
              <span>
                <Tooltip title='Report' arrow>
                  <Button className="report-btn report-reply-btn" onClick={() => setReportFormOpen(true)}>
                    <img src={redFlag} />
                  </Button>
                </Tooltip>
              </span>
              <div className="report-box">
                <Dialog open={reportFormOpen} onClose={() => setReportFormOpen(true)}>

                  {/* <DialogTitle>{topic.title}</DialogTitle> */}
                  <DialogContent>
                  <DialogContentText>
                      Report a spoiler, or other unsuitable content
                    </DialogContentText>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      label="What are you reporting?"
                      type="text"
                      fullWidth
                      variant="standard"
                      // value={replyText}
                      // onChange={(e) => setReplyText(e.target.value)}
                    />
                  </DialogContent>
                  
                  <DialogActions>
                    {/* TODO: Report button needs to send info the db */}
                    <Button onClick={() => setReportFormOpen(false)}>Report</Button>
                    <Button onClick={() => setReportFormOpen(false)}>Cancel</Button>
                  </DialogActions>
                </Dialog>
              </div>
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
