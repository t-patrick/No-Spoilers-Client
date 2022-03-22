// import React from "react";
import Episodechooser from "../EpisodeChooser/Episodechooser";
import Forum from "../Forum/Forum";
import Backintime from "../BackInTime/Backintime";
import { useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import StyledShow from "./show.styled";
// mui library below
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
// mui library above


function Show() {
//
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
//
  return (
    <StyledShow>
      <Navbar />
      <div className="show-view">

        <div className="image-button-container">
          {/* placeholder image below  */}
          <img src="https://static.posters.cz/image/1300/posters/sherlock-series-4-iconic-i33910.jpg"/>
          {/* modal */}
          <div className="button-container">
            <Button onClick={handleOpen}>CLICK ME!</Button>
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Some TV shows details ...
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>
              </Box>
            </Modal>
          </div>
          {/* modal */}
        </div>
        <Backintime />
      </div>

      <Episodechooser />
      <Forum />
    </StyledShow>
  );
}

export default Show;
