import React from "react";
import ForumNewTopic from "./ForumNewTopic";
import ForumTopicList from "./ForumTopicList";
import StyledForum from "./forum.styled";

function Forum() {
  return (
    <StyledForum>
      <h2>TV SHOWS NAME: SE 1: EP 2</h2>
      <ForumNewTopic />
      <ForumTopicList />
    </StyledForum>
  );
}

export default Forum;
