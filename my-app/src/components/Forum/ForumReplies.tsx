import { TopicProps } from '../../proptypes';
import StyledForumReplies from './forumReplies.styled';
import redFlag from './image/red-flag.png';
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
// accordion
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';


function ForumReplies({topic}: TopicProps) {

  // modal 
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [openReport, setOpenReport] = React.useState(false);
  const handleReportOpen = () => {
    setOpenReport(true);
  }
  const handleReportClose = () => {
    setOpenReport(false);
  }
  //modal overridding mui's style below
  const divStyle = {
    'width': '600px',
  }



  return (
    <StyledForumReplies>
{/* accordion */}
      <div className='replies'>
        <Accordion>
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
              className='reply-summary'
            >
              <Typography>User 1</Typography>
            </AccordionSummary>
            <AccordionDetails className='reply-content'>
              <Typography >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            aria-controls="panel2a-content"
            id="panel2a-header"
            className='reply-summary'
          >
            <Typography>User 2</Typography>
          </AccordionSummary>
          <AccordionDetails className='reply-content'>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
{/* reply button */}
      <div className='reply-modal'>
          <Button variant="outlined" onClick={handleClickOpen}>
            Reply
            <div className='num-of-replies'>30</div>
          </Button>
          <Button className='report-btn' onClick={handleReportOpen}>Report<img src={redFlag}/></Button>
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

          <div className='report-box'>
            <Dialog open={openReport} onClose={handleReportClose} >
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
  )
}

export default ForumReplies;
