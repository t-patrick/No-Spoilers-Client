import { TopicProps } from '../../proptypes';
// modal:
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { blue, purple, red } from '@mui/material/colors';
// collapse: 
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Fade from '@mui/material/Fade';
import FormControlLabel from '@mui/material/FormControlLabel';



const commentBox = (<div>Replying to the topic</div>)

function ForumReplies({topic}: TopicProps) {
  // modal 
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  // collapse
  const [checked, setChecked] = React.useState(false);
  const handleChange = () => {
    setChecked((prev) => !prev);
  };


  //overridding mui's style below
  const divStyle = {
    // border: '2px solid blue',
    // 'backgroundColor': 'purple',
    // 'width': '1000px',
    // 'padding': '100px',
  }

  return (
    <div>
      <div className='reply'>
          <Button variant="outlined" onClick={handleClickOpen}>
            Reply
            <div className='num-of-replies'>30</div>
          </Button>
          <div className='reply-box'>
            <Dialog open={open} onClose={handleClose} >
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

      <footer>
        <Box sx={{ height: 180 }}>
        <FormControlLabel
          control={<Switch checked={checked} onChange={handleChange} />}
          label="Show"
        />
        <Box sx={{ display: 'flex' }}>
          <Fade in={checked}>{commentBox}</Fade>
        </Box>
        </Box>
      </footer>
    </div>
  )
}

export default ForumReplies;