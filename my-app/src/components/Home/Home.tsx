import React, { SyntheticEvent, useState, Component } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Reel from '../Reel/Reel';
import StyledHome from './home.styled';
import search from './image/search.png';
// import completedIcon from './image/completed.png';
// import deleteIcon from './image/remove.png';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Tooltip from "@mui/material/Tooltip";



function Home() {
  const user = useSelector<MainState>((state) => state.user.user);

  const navigate = useNavigate();

  // To map through
  const userShows: UserTVShow[] = (user as User).userTVInfo;
  const defaultWatched =
    userShows && userShows.filter((show) => show.isCompleted);
  const defaultOnTheGo =
    userShows && userShows.filter((show) => !show.isCompleted);

  const [watched, setWatched] = useState(defaultWatched);
  const [onTheGo, setOnTheGo] = useState(defaultOnTheGo);
  const [currentSearch, setCurrentSearch] = useState('');

  const goToShowPage = (showId: number) => {
    navigate(`/show/${showId}`);
  };

  const filterMovies = (value: string) => {
    if (value === '') setOnTheGo(defaultOnTheGo);
    if (value === '') setWatched(defaultOnTheGo);
    const regexp = new RegExp(`.*${value}.*`, 'ig');
    const filteredOnTheGo = defaultOnTheGo.filter((show) =>
      regexp.test(show.name)
    );
    const filteredWatched = defaultWatched.filter((show) =>
      regexp.test(show.name)
    );

    setWatched(filteredWatched);
    setOnTheGo(filteredOnTheGo);
  };

  const updateSearch = (value: string) => {
    setCurrentSearch(value);
    filterMovies(value);
  };

  const mockShowPath: Array<string> = ['https://image.tmdb.org/t/p/w500/aiy35Evcofzl7hASZZvsFgltHTX.jpg','https://image.tmdb.org/t/p/w500/9T4e6kA8tVtIK9GZ1Cy1QMvK9js.jpg']

  return (
    <StyledHome>
      <Navbar showSearch={true} />
      <div>
        <div className="filter">
          <input
            type="text"
            placeholder="Filter the lists below..."
            value={currentSearch}
            onChange={(e) => updateSearch(e.target.value)}
          />
        </div>

        <div className="row ">
          <div className="heading">On the go</div>
          {onTheGo && <Reel userTVShows={onTheGo} />}
          <div className='poster-container'>
            <div>
              <img src={mockShowPath[0]}/>
              <div className='btn'>
              <Tooltip title='Mark as Complete' arrow>
                <Button variant="outlined" className='completed'>✔</Button>
              </Tooltip>
              <Tooltip title='Delete the show' arrow>
                <Button variant="outlined" className='delete'>✖</Button>
              </Tooltip>
              </div>
            </div>
          </div>
        </div>

{/* Completed */}
        <div className="row ">
          <div className="heading">Completed</div>
          {watched && <Reel userTVShows={watched} />}

          <div className='poster-container'>
            <div>
              <img src={mockShowPath[1]}/>
              <div className='btn'>
                <Tooltip title='Delete the show' arrow>
                  <Button variant="outlined" className='delete'>✖</Button>
                </Tooltip>
              </div>
            </div>
          </div>

        </div>
      </div>
    </StyledHome>
  );
}

export default Home;
