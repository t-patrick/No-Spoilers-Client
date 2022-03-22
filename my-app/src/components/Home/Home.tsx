import React, { SyntheticEvent, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Reel from "../Reel/Reel";
import StyledHome from "./home.styled";

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
      <div>
        <input type="text" placeholder="Filter the lists below..." />
      </div>

      <div>
        <div>On the go</div>
        <Reel />
      </div>

      <div>
        <div>Completed</div>
        <Reel />
      </div>

    </StyledHome>
  );
}

export default Home;
