import React from "react";
import Navbar from "../Navbar/Navbar";
import Episodechooser from "../EpisodeChooser/Episodechooser";
import Forum from "../Forum/Forum";
import Backintime from "../BackInTime/Backintime";

function Show() {
  return (
    <div>
      <div>Some TV shows details ...</div>

      <Backintime />

      <Episodechooser />

      <Forum />
    </div>
  );
}

export default Show;
