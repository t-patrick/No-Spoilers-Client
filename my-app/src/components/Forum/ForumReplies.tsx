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
import { postReply } from '../../API/user-api';
import { CurrentShowContext, ForumContext } from '../../App';

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
  const [openReport, setOpenReport] = React.useState(false);

  const handleSendReply = async () => {
    const newReply = await postReply(
      userTVShow.TMDB_show_id,
      user._id,
      '' + (topic._id as number),
      replyText
    );

    if (newReply) addReply(topic, newReply);
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleReportClose = () => {
    setOpenReport(false);
  };
  //modal overridding mui's style below
  const divStyle = {
    width: '600px',
  };

  return topic.replies ? (
    <StyledForumReplies>
      <div className="replies">
        {topic.replies.map((reply, index) => (
          <ReplyBox key={index} reply={reply} userTVShow={userTVShow} />
        ))}
      </div>
      <div className="reply-modal">
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
          <Dialog open={openReport} onClose={handleReportClose}>
            <DialogTitle>REPORT SPOILERS!</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Your shit has been reported HAHAHA!
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleReportClose}>Close</Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>

      <div className="report-box">
        <Dialog open={reportFormOpen} onClose={handleReportClose}>
          <div style={divStyle}>
            <DialogTitle>{topic.title}</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Report a spoiler, or other unsuitable content
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Your cosdv."
                type="email"
                fullWidth
                variant="standard"
              />
            </DialogContent>
          </div>
          <DialogActions>
            <Button onClick={handleReportClose}>Cancel</Button>
            <Button onClick={handleReportClose}>Reply</Button>
          </DialogActions>
        </Dialog>
      </div>
    </StyledForumReplies>
  ) : (
    <></>
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
