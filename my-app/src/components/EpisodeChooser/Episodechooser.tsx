import React, { useState } from "react";
import StyledEpisodeChooser from "./episodechooser.styled";

function Episodechooser() {

  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [episodeUpTo, setEpisodeUpTo] = useState<string>('S3E4');

  const [seasons, setSeasons] = useState([365, 20, 20, 40]);

  const getBackground = (tabNumber: number) => {
    if (tabNumber === selectedTab) {
      return {
        backgroundColor: '#d4d4d8'
      }
    }

    return {
      backgroundColor: 'grey'
    }
  }

  const renderEps = () => {

    const eps = [];

    const reg = /S([0-9]+)E([0-9]+)/g

    const results = reg.exec(episodeUpTo) as Array<string>

    for (let i = 1; i <= seasons[selectedTab]; i++) {
      const hasWatched = (selectedTab + 1) < +results[1] || (selectedTab + 1) === +results[1] && i <= +results[2];
      const style = {
        backgroundColor: hasWatched ? 'green' : 'grey'
      }
      const num = i < 10 ? `0${i}` : i;
      eps.push((
        <div className="episode" style={style} onClick={() => updateCurrentEp(i)}> {num} </div>
      ))
    }

    return eps;
  }

  // Send userId, TvshowID and episode code string
  const updateCurrentEp = (episode: number) => {
    const newEpisodeCode = `S${selectedTab + 1}E${episode}`

    setEpisodeUpTo(newEpisodeCode);
  }

  return (
    <StyledEpisodeChooser>
      <ul className="tabs">
        {seasons.map((season, index) =>
          <li key={index}
            onClick={() => setSelectedTab(index)}
            style={getBackground(index)}>Season {index + 1} </li>)}
      </ul>
      <div className="main">
        <h1>Update current episode:</h1>
        <div className="episodes">
          {renderEps()}
        </div>
      </div>
    </StyledEpisodeChooser >
  );
}

export default Episodechooser;
