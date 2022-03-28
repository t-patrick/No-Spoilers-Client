import { Button } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../Navbar/Navbar';
import Reel from '../Reel/Reel';
import Sidebar from '../Sidebar/Sidebar';
import StyledHome from './home.styled';

function Home() {
  const state = useSelector<MainState>((state) => state);
  const user = useSelector<MainState>((state) => state.user.user);

  const userShows: UserTVShow[] = (user as User).userTVInfo;
  const defaultWatched =
    userShows && userShows.filter((show) => show.isCompleted);
  const defaultOnTheGo =
    userShows && userShows.filter((show) => !show.isCompleted);

  const [watched, setWatched] = useState(defaultWatched);
  const [onTheGo, setOnTheGo] = useState(defaultOnTheGo);
  const [currentSearch, setCurrentSearch] = useState('');

  useEffect(() => {
    setWatched(defaultWatched);
    setOnTheGo(defaultOnTheGo);
    filterMovies(currentSearch);
  }, [state]);

  const filterMovies = (value: string) => {
    if (value === '') {
      setOnTheGo(defaultOnTheGo);
      setWatched(defaultWatched);
      return;
    }
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

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {
    setSidebar(!sidebar);
    console.log('heyy');
  }

  return (
    <StyledHome>
        <div className='sidebar'>
          {sidebar && < Sidebar/>}
        </div>
        <div className='non-sidebar'>
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
              <div className="heading">On the go<Button onClick={showSidebar}>Open</Button></div>
              {onTheGo && <Reel userTVShows={onTheGo} isCompleted={false} />}
            </div>

            <div className="row ">
              <div className="heading">Completed</div>
              {watched && <Reel userTVShows={watched} isCompleted={true} />}
            </div>
          </div>
        </div>
    </StyledHome>
  );
}

export default Home;
