import React, { SyntheticEvent, useState, Component } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Reel from "../Reel/Reel";
import StyledHome from "./home.styled";
import search from './image/search.png'


function Home() {

  const user = useSelector<MainState>(state => state.user.user);

  const navigate = useNavigate();

  // To map through
  const userShows: UserTVShow[] = (user as User).userTVInfo;
  const defaultWatched = userShows && userShows.filter(show => show.isCompleted);
  const defaultOnTheGo = userShows && userShows.filter(show => !show.isCompleted);

  const [watched, setWatched] = useState(defaultWatched);
  const [onTheGo, setOnTheGo] = useState(defaultOnTheGo);
  const [currentSearch, setCurrentSearch] = useState('');


  const goToShowPage = (showId: number) => {
    navigate(`/show/${showId}`);
  }

  const filterMovies = () => {
    if (currentSearch === '') setOnTheGo(defaultOnTheGo);
    if (currentSearch === '') setWatched(defaultOnTheGo);
    const regexp = new RegExp(`${currentSearch}.*`)
    const filteredOnTheGo = defaultOnTheGo.filter(show => regexp.test(show.name));
    const filteredWatched = defaultWatched.filter(show => regexp.test(show.name));

    setWatched(filteredWatched);
    setOnTheGo(filteredOnTheGo);
  }




  return (
    <StyledHome>
      <Navbar />
      <div >
        <div className="filter">
          <input type="text" placeholder="Filter the lists below..." />
          {/* <button type="submit"><img src={search}/></button> */}
        </div>

        <div className="row "> 
          <div className="heading">On the go</div>
          <Reel />
        </div>

        <div className="row ">
          <div className="heading">Completed</div>
          <Reel />
        </div>
      </div>

    </StyledHome>
  );
}

export default Home;
