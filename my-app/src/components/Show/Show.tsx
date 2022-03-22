import React, { useEffect, useState } from "react";
import Episodechooser from "../EpisodeChooser/Episodechooser";
import Forum from "../Forum/Forum";
import Backintime from "../BackInTime/Backintime";
import { useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import { useParams } from "react-router-dom";
import { getShowDetail } from "../../API/user-api";
import StyledShow from "./show.styled";

function Show() {

  const { id } = useParams();
  const [show, setShow] = useState<TVShow>();
  const [userTVShow, setUserTVShow] = useState<UserTVShow>();

  const user = useSelector<MainState>(state => state.user.user) as User;

  useEffect(() => {
    const getShow = async () => {
      if (id) {
        const detail = await getShowDetail(id);
        setShow(detail);


        const userShow = user.userTVInfo.find(show => show.TMDB_show_id === parseInt(id))

        if (userShow) setUserTVShow(userShow);
      }
    }
    getShow()

  }, [])

  return (
    show && userTVShow ? (
      <StyledShow>
        <Navbar />
        <div>{show.name} </div>

        <Backintime />

        <Episodechooser seasons={show.seasons} userShow={userTVShow} />
        <Forum showDetail={show} userShow={userTVShow} />
      </StyledShow>
    ) : <></>
  )
}

export default Show;
