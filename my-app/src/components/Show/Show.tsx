import React from "react";
import Episodechooser from "../EpisodeChooser/Episodechooser";
import Forum from "../Forum/Forum";
import Backintime from "../BackInTime/Backintime";
import { useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";

function Show() {


  return (
    <div>
      <Navbar />
      <div>Some TV shows details ...</div>

      {/* <Backintime /> */}

      <Episodechooser />
      <Forum />
    </div>
  );
}

export default Show;
