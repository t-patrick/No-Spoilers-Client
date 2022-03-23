import { TopicProps } from '../../proptypes';
import StyledForumReplies from './forumReplies.styled';
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
// import Box from '@mui/material/Box';
// import Switch from '@mui/material/Switch';
// import Fade from '@mui/material/Fade';
// import FormControlLabel from '@mui/material/FormControlLabel';
// accordion
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';

//collapse
// const commentBox = (<div><p>Commodo est anim id nulla amet reprehenderit in aute tempor in. Veniam ut officia amet irure ipsum dolor excepteur in nisi incididunt. Et qui et tempor commodo exercitation. Nisi velit ea quis commodo ea minim ea labore. Pariatur qui amet laborum ad proident cupidatat laborum adipisicing irure. Ad velit mollit aliqua sunt elit fugiat excepteur dolore eu minim amet excepteur officia non.Dolor velit do commodo commodo deserunt veniam. Irure tempor enim veniam et amet aliquip est dolore id consequat. Velit nulla consectetur Lorem magna ad ullamco. Mollit deserunt commodo aute ut adipisicing.Sunt proident enim deserunt veniam laboris culpa qui aliquip quis. Exercitation amet voluptate qui labore veniam pariatur adipisicing. Nulla exercitation velit nulla nulla commodo sit ex sint duis fugiat. Ullamco anim aliquip magna aute magna. Consequat laboris veniam consectetur cillum laboris aliqua nulla esse esse incididunt amet commodo labore.Ea cillum consectetur dolore deserunt sit pariatur proident veniam. Elit consectetur pariatur irure et anim exercitation excepteur excepteur sint commodo enim adipisicing laboris. Eu culpa et sunt quis consectetur elit nisi.</p>Deserunt quis adipisicing fugiat ipsum. Ut veniam aute minim deserunt veniam esse aliquip. Mollit irure id qui voluptate velit Lorem nisi voluptate nostrud consequat veniam consequat mollit mollit.Enim dolore quis nostrud laborum deserunt ad irure adipisicing. Laboris anim consectetur excepteur mollit aliqua. In non labore adipisicing nulla irure occaecat occaecat labore officia. Excepteur deserunt occaecat deserunt veniam ad. Nisi labore quis aliqua eiusmod ipsum cillum officia consectetur veniam voluptate exercitation. Incididunt consequat magna anim veniam amet id. Minim elit elit laborum ex commodo in non et eiusmod ad fugiat.Amet cupidatat enim incididunt exercitation sint mollit esse laborum mollit aliqua pariatur adipisicing. Commodo ex mollit adipisicing quis eiusmod eu labore culpa cillum dolore aliquip ex magna nostrud. Nulla pariatur quis ullamco non aliqua ipsum quis. Labore esse nisi elit in non labore in nulla.Voluptate deserunt exercitation enim commodo. Voluptate culpa culpa cillum laboris ea dolore eu minim proident aliqua sit esse. Dolore adipisicing magna et sint aliquip ex ex non.</div>)

function ForumReplies({ topic }: TopicProps) {
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
    width: '600px',
  };

  return (
    <StyledForumReplies>
      <div className="replies">
        <Accordion>
          <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Timothy Patrick</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Ben Ho</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>

      <div className="reply-modal">
        <Button variant="outlined" onClick={handleClickOpen}>
          Reply
          <div className="num-of-replies">30</div>
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
