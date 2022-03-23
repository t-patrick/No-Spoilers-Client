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
      <Navbar showSearch={false} />
      <div className="show-view">
        <div className="image-button-container">
          <img
            src={`https://image.tmdb.org/t/p/w500${userTVShow.poster_path}`}
          />
          {/* modal */}
          <div className="button-container">
            <Button onClick={handleOpen}>Show Details</Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h3">
                  &quot;{show.tagline}&quot;
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <p>
                    <span style={{ fontWeight: 800 }}> Description:</span>{' '}
                    {show.overview}
                  </p>
                  <p>
                    Release year:{' '}
                    <span>{new Date(show.first_air_date).getFullYear()}</span>
                  </p>
                </Typography>
              </Box>
            </Modal>
          </div>
        </div>
        <Backintime show={show} currentEpisode={userTVShow.episodeCodeUpTo} />
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
