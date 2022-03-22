import React, { useEffect, useState } from 'react';
import Episodechooser from '../EpisodeChooser/Episodechooser';
import Forum from '../Forum/Forum';
import Backintime from '../BackInTime/Backintime';
import { useSelector } from 'react-redux';
import Navbar from '../Navbar/Navbar';
import StyledShow from './show.styled';
// mui library below
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useParams } from 'react-router-dom';

import { getShowDetail } from '../../API/user-api';

function Show() {
  const { id } = useParams();
  const [show, setShow] = useState<TVShow>({} as TVShow);
  const [userTVShow, setUserTVShow] = useState<UserTVShow>({} as UserTVShow);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

  const user = useSelector<MainState>((state) => state.user.user) as User;

  useEffect(() => {
    const getShow = async () => {
      if (id) {
        const detail = await getShowDetail(id);
        setShow(detail);

        const userShow = user.userTVInfo.find(
          (show) => show.TMDB_show_id === parseInt(id)
        );

        if (userShow) setUserTVShow(userShow);
      }
    };
    getShow();
  }, [id]);

  //
  return (
    <StyledShow>
      <Navbar />
      <div className="show-view">
        <div className="image-button-container">
          {/* placeholder image below  */}
          <img src="https://static.posters.cz/image/1300/posters/sherlock-series-4-iconic-i33910.jpg" />
          {/* modal */}
          <div className="button-container">
            <Button onClick={handleOpen}>CLICK ME!</Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Some TV shows details ...
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <p>
                    Description:{' '}
                    <span>Duis mollis, est non commodo luctus, nisi.</span>{' '}
                  </p>
                  <p>
                    Release year: <span>2010</span>
                  </p>
                  <p>
                    Actors: <span>Benedict Cumberbatch</span>
                  </p>
                </Typography>
              </Box>
            </Modal>
          </div>
        </div>
        <Backintime />
      </div>

      <Episodechooser
        seasons={show.seasons}
        userShow={userTVShow}
        setUserTVShow={setUserTVShow}
      />
      <Forum showDetail={show} userShow={userTVShow} />
    </StyledShow>
  );
}

export default Show;
