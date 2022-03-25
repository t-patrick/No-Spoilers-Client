import { TopicProps } from '../../proptypes';
import StyledForumReplies from './forumReplies.styled';
import redFlag from './image/red-flag.png';
import React, { useContext, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ReplyBox from './ReplyBox';
import { useSelector } from 'react-redux';
import { CurrentShowContext } from '../Show/Show';
import { ForumContext } from './Forum';

function ForumReplies({ topic }: TopicProps) {
  //// REDUX STORE
  const user = useSelector<MainState>((state) => state.user.user) as User;

  //// CONTEXT
  const { userTVShow } = useContext(CurrentShowContext);

  const { addReply } = useContext(ForumContext);

  //// LOCAL STATE
  const [open, setOpen] = useState(false);
  const [reportFormOpen, setReportFormOpen] = useState(false);
  const [replyText, setReplyText] = useState<string>('');
  const [showReplies, setShowReplies] = useState(false);

  const handleSendReply = () => {
    const reply: Reply = {
      _id: 1,
      authorName: user.displayName,
      avatar: user.avatar,
      authorUserId: user._id,
      date: new Date(Date.now()),
      body: replyText,
      topicId: topic._id as number,
      replierEpisodeUpTo: userTVShow.episodesWatchedSoFar,
      isReported: false,
    };

    // TODO Send to API

    addReply(topic, reply);
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };



  //modal overridding mui's style below
  const divStyle = {
    width: '600px',
  };

  return (
    <StyledForumReplies>
      <div className="replies">
        {showReplies && topic.replies.map((reply, index) => (
          <ReplyBox key={index} reply={reply} userTVShow={userTVShow} />
        ))}
      </div>
      <div className="reply-modal">
        <Button className="show-hide-btn" variant='outlined' onClick={() => setShowReplies(!showReplies)}>{showReplies ? 'Hide': 'Show'}</Button>
        <Button variant="outlined" onClick={handleClickOpen}>
          Reply
          <div className="num-of-replies">30</div>
        </Button>

        <Button className="report-btn" onClick={() => setReportFormOpen(true)}>
          Report
          <img src={redFlag} />
        </Button>

        <div className="reply-box">
          <Dialog open={open} onClose={() => setOpen(true)}>
            <div style={divStyle}>
              <DialogTitle>{topic.title}</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Reply to join the discussion!
                </DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Your comment here..."
                  type="email"
                  fullWidth
                  variant="standard"
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                />
              </DialogContent>
            </div>
            <DialogActions>
              <Button onClick={handleSendReply}>Reply</Button>
              <Button onClick={() => setOpen(false)}>Cancel</Button>
            </DialogActions>
          </Dialog>
        </div>

        <div className="report-box">
          <Dialog open={reportFormOpen} onClose={() => setReportFormOpen(true)}>

            <DialogTitle>{topic.title}</DialogTitle>
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

      </div>

    </StyledForumReplies>
  );
}

export default ForumReplies;

const mockReplies: Reply[] = [
  {
    _id: 23423,
    topicId: 123,
    authorUserId: 1235,
    authorName: 'Tim Patrick',
    replierEpisodeUpTo: 2,
    body: 'This is a fun replyyyyyyyyy',
    date: new Date(Date.now()),
    avatar: 'aergiehjrh',
    isReported: false,
  },
  {
    _id: 23423,
    topicId: 123,
    authorUserId: 1235,
    authorName: 'Tim Patrick',
    replierEpisodeUpTo: 50,
    body: 'This is a fun replyyyyyyyyy',
    date: new Date(Date.now()),
    avatar: 'aergiehjrh',
    isReported: false,
  },
];
