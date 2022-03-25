import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateEpisode, updateUserWayback } from '../../API/user-api';
import { CurrentShowContext } from '../../App';
import { UserActionCreators } from '../../state/action-creators';

function useEpisodeUpTo() {
  const user = useSelector<MainState>((state) => state.user.user) as User;
  const dispatch = useDispatch();
  const { setUserTVShowsAction } = bindActionCreators(
    UserActionCreators,
    dispatch
  );

  const { setUserTVShow, userTVShow, showDetail } =
    useContext(CurrentShowContext);

  const [episodeUpTo, setEpisodeUpTo] = useState<string>('0');
  const [currentEpisode, setCurrentEpisode] = useState<Episode>({} as Episode);
  const [selectedTab, setSelectedTab] = useState<number>(0);

  useEffect(() => {
    userTVShow && userTVShow.episodeCodeUpTo !== ''
      ? setEpisodeUpTo(userTVShow.episodeCodeUpTo)
      : setEpisodeUpTo('s1e0');
  }, [userTVShow]);

  const updateCurrentEp = async (episode: number) => {
    const newEpisodeCode = `s${selectedTab + 1}e${episode}`;

    const episodeDetail = showDetail.seasons[selectedTab].episodes[episode];
    // need episode id

    const update = await updateEpisode(
      userTVShow.userId,
      newEpisodeCode,
      episodeDetail.TMDB_episode_id.toString(),
      userTVShow.TMDB_show_id.toString()
    );

    if (update) {
      setEpisodeUpTo(newEpisodeCode);
      const shows = [...user.userTVInfo];
      const index = shows.findIndex(
        (show) => update.TMDB_show_id === show.TMDB_show_id
      );
      shows[index] = update;
      setUserTVShowsAction(shows);
      setUserTVShow(update);
    } else {
      console.log('failed');
    }
  };

  return {
    episodeUpTo,
    setEpisodeUpTo,
    selectedTab,
    setSelectedTab,
    updateCurrentEp,
  };
}

export default useEpisodeUpTo;

// Array<string | number | Dispatch<SetStateAction<string>> | Dispatch<SetStateAction<string>>>
