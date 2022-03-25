import { Button, Tooltip } from '@mui/material';
import React, { SyntheticEvent, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { deleteUserShow } from '../../API/user-api';
import { CurrentShowContext, ForumContext } from '../../App';
import { ReelProps } from '../../proptypes';
import { UserActionCreators } from '../../state/action-creators';

function Reel({ userTVShows, isCompleted }: ReelProps) {
  const { userTVShow } = useContext(CurrentShowContext);
  const navigate = useNavigate();
  const goToShowPage = (showId: number) => {
    navigate(`/show/${showId}`);
  };

  const dispatch = useDispatch();
  const { removeUserShowAction } = bindActionCreators(
    UserActionCreators,
    dispatch
  );

  const markComplete = (show: UserTVShow) => {};

  const deleteShow = async (e: SyntheticEvent, show: UserTVShow) => {
    e.preventDefault();
    const isDeleted = await deleteUserShow('' + show.TMDB_show_id, show.userId);
    isDeleted && removeUserShowAction(show.TMDB_show_id);
  };

  return (
    <div className="poster-container">
      {userTVShows.map((show, index) => (
        <div key={index}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${show.poster_path}`}
            onClick={() => goToShowPage(show.TMDB_show_id)}
          />
          <div className="btn">
            {!isCompleted && (
              <Tooltip title="Mark as Complete" arrow>
                <Button
                  variant="outlined"
                  className="completed"
                  onClick={() => markComplete(show)}
                >
                  ✔
                </Button>
              </Tooltip>
            )}
            <Tooltip title="Delete the show" arrow>
              <Button
                variant="outlined"
                className="delete"
                onClick={(e) => deleteShow(e, show)}
              >
                ✖
              </Button>
            </Tooltip>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Reel;
