import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateEpisode, updateUserWayback } from '../../API/user-api';
import { UserActionCreators } from '../../state/action-creators';

function useEpisodeUpTo(
  userShow: UserTVShow,
  setUserTVShow: Dispatch<SetStateAction<UserTVShow>>
) {
  const [episodeUpTo, setEpisodeUpTo] = useState<string>('0');
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const user = useSelector<MainState>((state) => state.user.user) as User;

  const dispatch = useDispatch();
  const { setUserTVShowsAction } = bindActionCreators(
    UserActionCreators,
    dispatch
  );

  useEffect(() => {
    userShow && userShow.episodeCodeUpTo !== ''
      ? setEpisodeUpTo(userShow.episodeCodeUpTo)
      : setEpisodeUpTo('s1e0');
  }, [userShow]);

  const updateCurrentEp = async (episode: number) => {
    const newEpisodeCode = `s${selectedTab + 1}e${episode}`;

    const update = await updateEpisode(
      userShow.userId,
      newEpisodeCode,
      '' + userShow.TMDB_show_id
    );

    const hasUpdated = await updateUserWayback(user._id, userShow.TMDB_show_id);
    if (update && hasUpdated) {
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
