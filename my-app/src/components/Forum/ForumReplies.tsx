import { TopicProps } from '../../proptypes';
import StyledForumReplies from './forumReplies.styled';
import redFlag from './image/red-flag.png';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ReplyBox from './ReplyBox';

function ForumReplies({ topic, userShow }: TopicProps) {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  const handleReportOpen = () => {
    setOpen(true);
  };

  const handleReportClose = () => {
    setOpen(false);
  };

  //modal overridding mui's style below
  const divStyle = {
    width: '600px',
  };

  return (
    <StyledForumReplies>
      <div className="replies">
        <ReplyBox reply={mockReplies[0]} userShow={userShow} />
        <ReplyBox reply={mockReplies[1]} userShow={userShow} />
      </div>
      <div className="reply-modal">
        <Button variant="outlined" onClick={handleClickOpen}>
          Reply
          <div className="num-of-replies">30</div>
        </Button>
        <Button className="report-btn">
          Spoiler
          <img src={redFlag} />
        </Button>
        <div className="reply-box">
          <Dialog open={open} onClose={handleClose}>
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
                />
              </DialogContent>
            </div>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleClose}>Reply</Button>
            </DialogActions>
          </Dialog>
        </div>

        <div className="report-box">
          <Dialog open={open} onClose={handleReportClose}>
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
                />
              </DialogContent>
            </div>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleClose}>Reply</Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>

      {/* <div className='replies'>
        <Box sx={{ height: 180 }}>
        <FormControlLabel
          control={<Switch checked={checked} onChange={handleChange} />}
          label="Show Comments"
        />
        <Box sx={{ display: 'flex' }}>
          <Fade in={checked}>{commentBox}</Fade>
        </Box>
        </Box>
      </div> */}
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
  },
];
