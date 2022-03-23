// import React from 'react';
import { TopicProps, TopicsProps } from '../../proptypes';
import StyledForumTopicList from './forumTopicList.styled';
import replyTo from './image/icon.png';
import StyledTopicBox from './topicbox.styled';

//import from mui library
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


function TopicBox({ topic, userShow, showDetail }: TopicProps) {
// mui library
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
//mui library 

  const upVote = () => {};

  const downVote = () => {};

  const renderTopic = (topic: Topic) => {};

  const renderTopics = () => {
    // map through topics.
    // Render Topic component
  };

  return (
    <StyledTopicBox>
      <div className="score">
        <div>
          <button className="up"></button>
        </div>
        <div className="number">{topic.voteScore}</div>
        <div>
          <button className="down"></button>
        </div>
      </div>

      <div className="text-container">
        <div className="topic-header">
          <div>{topic.title}</div>
          <div>{topic.date.toDateString()}</div>
        </div>

        <div className="bottom-half">
          <div className="user-info">
            <div className="avatar">
              <img
                src={`https://avatars.dicebear.com/api/male/${topic.avatar}.svg`}
              ></img>
            </div>
            <div>{topic.authorName}</div>
          </div>
{/* mui library */}
          <div className="topic-content">
            <div>{topic.body}</div>
            <div>
              <Button variant="outlined" onClick={handleClickOpen}>
                Open form dialog
              </Button>
              <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    To subscribe to this website, please enter your email address here. We
                    will send updates occasionally.
                  </DialogContentText>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="email"
                    fullWidth
                    variant="standard"
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button onClick={handleClose}>Subscribe</Button>
                </DialogActions>
              </Dialog>
            </div>
{/* mui library */}

            {/* <div>
              <button>
                <img src={replyTo} />
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </StyledTopicBox>
  );
}

export default TopicBox;
