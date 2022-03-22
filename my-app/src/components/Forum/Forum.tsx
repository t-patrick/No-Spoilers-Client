import React from "react";
import ForumNewTopic from "./ForumNewTopic";
import ForumTopicList from "./ForumTopicList";
import StyledForum from "./forum.styled";
import { ForumProps } from "../../proptypes";
import { useSelector } from "react-redux";

function Forum({ showDetail, userShow }: ForumProps) {

  const user = useSelector<MainState>(state => state.user.user) as User;

  return (
    <StyledForum>
      <h2>{showDetail.name}: Next Episode: {userShow.episodeCodeNext}</h2>
      <ForumNewTopic />
      <ForumTopicList />
    </StyledForum>
  );
}

export default Forum;
