import React from "react";
import Navbar from "../Navbar/Navbar";
import Reel from "../Reel/Reel";
import StyledHome from "./home.styled";

function Home() {
  return (
    <StyledHome>
      <div>
        <Navbar />

        <div>
          <input type="text" placeholder="Filter the lists below..."></input>
        </div>

        <div>
          <div>On the go</div>
          <Reel />
        </div>

        <div>
          <div>Completed</div>
          <Reel />
        </div>
      </div>
    </StyledHome>
  );
}

export default Home;
