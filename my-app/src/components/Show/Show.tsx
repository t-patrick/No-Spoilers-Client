import React from "react";
import Episodechooser from "../EpisodeChooser/Episodechooser";
import Forum from "../Forum/Forum";
import Backintime from "../BackInTime/Backintime";
import { useSelector } from "react-redux";
import QuickSearch from "../Navbar/quick-search";

function Show() {


  return (
    <div>
      <div>Some TV shows details ...</div>

      {/* <Backintime /> */}

      <Episodechooser />
      {/* <Forum /> */}
      <QuickSearch />
    </div>
  );
}

export default Show;
