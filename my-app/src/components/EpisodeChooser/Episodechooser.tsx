import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateEpisode } from '../../API/user-api';
import { EpisodechooserProps } from '../../proptypes';
import { UserActionCreators } from '../../state/action-creators';
import { constructEpCode, getBackground } from './episode-chooser-helpers';
import StyledEpisodeChooser from './episodechooser.styled';
import useEpisodeUpTo from './useEpisodeUpTo';

function Episodechooser({
  seasons,
  userShow,
  setUserTVShow,
}: EpisodechooserProps) {
  const {
    episodeUpTo,
    setEpisodeUpTo,
    selectedTab,
    setSelectedTab,
    updateCurrentEp,
  } = useEpisodeUpTo(userShow, setUserTVShow);

  const renderEps = (season: number, episodes: Episode[]) => {
    const [seasonUpToNumber, episodeUpToNumber] = episodeUpTo
      .slice(1)
      .split('e')
      .map((n) => parseInt(n));

    return episodes.map((episode, i) => {
      const hasWatched =
        episode.season_number < seasonUpToNumber ||
        (episode.season_number === seasonUpToNumber &&
          episode.episode_number <= episodeUpToNumber);
      const style = {
        backgroundColor: hasWatched ? '#16a34a' : '#52525b',
      };
      const num =
        episode.episode_number < 10
          ? `0${episode.episode_number}`
          : episode.episode_number;
      return (
        <div
          className="episode"
          key={i}
          style={style}
          onClick={() => updateCurrentEp(episode.episode_number)}
        >
          {' '}
          {num}{' '}
          {hasWatched ||
          constructEpCode(
            episode.season_number,
            episode.episode_number,
            userShow.episodeCodeNext
          ) === userShow.episodeCodeNext ? (
            <span>{episode.name}</span>
          ) : (
            ''
          )}
        </div>
      );
    });
  };

  const renderSeason = (index: number) => {
    return (
      <li
        key={index}
        onClick={() => setSelectedTab(index)}
        style={getBackground(index, selectedTab)}
      >
        Season {index + 1}{' '}
      </li>
    );
  };

  return seasons ? (
    <StyledEpisodeChooser>
      <ul className="tabs">
        {seasons.map((season, index) => renderSeason(index))}
      </ul>
      <div className="main">
        <h1>{"I've watched up to:"}</h1>
        <div className="episodes">
          {episodeUpTo &&
            seasons[selectedTab] &&
            renderEps(selectedTab, seasons[selectedTab].episodes)}
        </div>
      </div>
    </StyledEpisodeChooser>
  ) : (
    <></>
  );
}

export default Episodechooser;
