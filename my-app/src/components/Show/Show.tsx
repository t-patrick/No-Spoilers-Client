import React, { createContext, useEffect, useState } from 'react';
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
import { TailSpin } from 'react-loader-spinner';
import { CurrentShowContext } from '../../App';

function Show() {
  const { id } = useParams();
  const [show, setShow] = useState<TVShow>({} as TVShow);
  const [userTVShow, setUserTVShow] = useState<UserTVShow>({} as UserTVShow);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPosterPath, setCurrentPosterPath] = useState<string>('');

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
    setIsLoading(true);
    const getShow = async () => {
      if (id && user) {
        const userShow = user.userTVInfo.find(
          (show) => show.TMDB_show_id === parseInt(id)
        ) as UserTVShow;

        const detail = await getShowDetail(id, userShow.userId);

        if (userShow) setUserTVShow(userShow);
        setShow(detail);
        setIsLoading(false);

        setCurrentPosterPath(
          userShow.current_poster_path || userShow.poster_path
        );
      } else {
        console.log('====================================');
        console.log('in Show, id param or user is undefined');
        console.log('====================================');
      }
    };
    getShow();
  }, []);

  useEffect(() => {
    if (userTVShow) {
      setCurrentPosterPath(
        userTVShow.current_poster_path || userTVShow.poster_path
      );
    }
  }, [userTVShow]);

  const spinnerStyle = {
    position: 'absolute' as 'absolute' | 'relative' | 'fixed',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  };

  const coverStyle = {
    position: 'absolute' as 'absolute' | 'relative' | 'fixed',
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    zIndex: 40,
  };

  return (
    <CurrentShowContext.Provider
      value={{
        showDetail: show,
        userTVShow: userTVShow,
        setUserTVShow: setUserTVShow,
      }}
    >
      {isLoading && (
        <div style={coverStyle}>
          <div style={spinnerStyle}>
            <TailSpin color="#00BFFF" height={200} width={200} />
          </div>
        </div>
      )}
      <StyledShow>
        <Navbar showSearch={false} />
        <div className="show-view">
          <div className="image-button-container">
            <img
              src={`https://image.tmdb.org/t/p/w500${
                currentPosterPath || userTVShow.poster_path
              }`}
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
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h3"
                  >
                    {show.tagline && <>&quot;{show.tagline}&quot;</>}
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
          <div className='show-description'>
            <h1>{show.name}</h1>
            <br></br>
            <p>First episode date: {show.first_air_date}</p>
            <p>Last episode date: {show.last_air_date}</p>
            <p>Total number of seasons: {show.number_of_seasons}</p>
            <p>Total number of episode: {show.number_of_episodes}</p>
            {/* italic for tagline */}
            <p className='tagline'>{show.tagline}</p>
          </div>
          <Backintime show={show} currentEpisode={userTVShow.episodeCodeUpTo} />
        </div>

        <Episodechooser seasons={show.seasons} />
        <Forum />
      </StyledShow>
    </CurrentShowContext.Provider>
  );
}

export default Show;
