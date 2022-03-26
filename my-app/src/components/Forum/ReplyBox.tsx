import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from '@mui/material';
import React, { SyntheticEvent, useContext, useEffect, useState } from 'react';
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
import TextField from '@mui/material/TextField';
import { reportTopicOrReply } from '../../API/user-api';
import { ForumContext } from '../../App';

// Needs the conditional

function ReplyBox({ reply, userTVShow }: ReplyProps) {
  const [reportFormOpen, setReportFormOpen] = useState(false);
  const [reportText, setReportText] = useState('');

  const user = useSelector<MainState>((state) => state.user.user) as User;
  const { topics, updateTopic } = useContext(ForumContext);

  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  const openReport = (e: SyntheticEvent) => {
    setReportFormOpen(true);
    e.stopPropagation();
    e.preventDefault();
  };

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
          <span className="replier-progress-ahead replier-progress">
            {diff} episodes ahead
          </span>
        </>
      );
    }

    if (reply.replierEpisodeUpTo < userTVShow.episodesWatchedSoFar) {
      return (
        <>
          <span className="replier-progress-behind replier-progress">
            {diff} episodes behind
          </span>{' '}
        </>
      );
    }

    return (
      <>
        <span className="replier-progress-same replier-progress">
          on the same episode
        </span>{' '}
      </>
    );
  };

  const report = async (e: SyntheticEvent) => {
    e.stopPropagation();
    e.preventDefault();
    const report: Report = {
      reporterId: user._id.toString(),
      offendingUserId: reply.authorUserId.toString(),
      offenceType: reportText,
      type: 'Reply',
      topicId: reply.topicId?.toString() as string,
      replyId: reply._id?.toString() as string,
    };

    const response = await reportTopicOrReply(report);
    const topic = topics.find((top) => top._id === reply.topicId) as UserTopic;

    const updatedTopic = Object.assign({}, topic);
    (
      updatedTopic.replies.find((rep) => rep._id === reply._id) as Reply
    ).isReported = true;

    if (response.status === 200) {
      console.log('it works');
      updateTopic(updatedTopic);
    }

    setReportFormOpen(false);
  };

  useEffect(() => {
    userTVShow && setIsExpanded(!isReplierFurtherAlong() && !reply.isReported);
  }, []);

  return (
    <StyledReplyBox>
      <Accordion
        expanded={isExpanded}
        onClick={(e) => {
          if (!reportFormOpen) {
            setIsExpanded(!isExpanded);
          }
        }}
      >
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="reply-summary"
        >
          <Typography>
            <Reply />
            {isReplierTheUser() ? 'You' : reply.authorName},{' '}
            {renderReplierProgress()}
            <span>
              <Button
                className="report-btn report-reply-btn"
                onClick={(e) => openReport(e)}
              >
                <img src={redFlag} />
              </Button>
            </span>
            <div
              className="report-box"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
              }}
            >
              <Dialog
                open={reportFormOpen}
                onClose={() => setReportFormOpen(true)}
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                }}
              >
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
                    value={reportText}
                    onChange={(e) => setReportText(e.target.value)}
                  />
                </DialogContent>

                <DialogActions
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                  }}
                >
                  {/* TODO: Report button needs to send info the db */}
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                    }}
                  >
                    {' '}
                    <Button onClick={(e) => report(e)} value="rep">
                      Report
                    </Button>
                  </div>
                  <Button onClick={() => setReportFormOpen(false)}>
                    Cancel
                  </Button>
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
