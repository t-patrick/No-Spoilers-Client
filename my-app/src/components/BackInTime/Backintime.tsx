import React, { SyntheticEvent, useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ClockLoader } from 'react-spinners';
import {
  addUserWaybackUrl,
  getUserWaybackUrls,
  getWaybackUrls,
  updateUserWayback,
} from '../../API/user-api';
import { BackintimeProps, MainState } from '../../proptypes';
import StyledBackInTime from './BackInTime.styled';
import downArrow from './image/down.png';
import { CurrentShowContext } from '../../App';

function Backintime({ show, currentEpisode }: BackintimeProps) {
  const { userTVShow } = useContext(CurrentShowContext);

  const [waybackUrls, setWaybackUrls] = useState<ExternalIds>(
    {} as ExternalIds
  );

  const [userWaybackUrls, setUserWaybackUrls] = useState<Array<UserWayback>>(
    []
  );

  const [currentUserWayback, setCurrentUserWayback] = useState<string>('');

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const user: User = useSelector<MainState>((state) => state.user.user) as User;

  const addUserWayback = async (website: string) => {
    const response = await addUserWaybackUrl(
      user._id,
      website,
      show.TMDB_show_id
    );

    response && setUserWaybackUrls([...userWaybackUrls, response]);
  };

  const handleAddWayback = (e: SyntheticEvent) => {
    e.preventDefault();
    addUserWayback(currentUserWayback);
  };

  useEffect(() => {
    setIsLoading(true);

    const getWaybacks = async () => {
      const result = await getWaybackUrls(user._id, userTVShow.TMDB_show_id);
      setWaybackUrls(result);
      setIsLoading(false);
    };

    const getUserWaybacks = async () => {
      await updateUserWayback(user._id, userTVShow.TMDB_show_id);
      const userWaybacks = await getUserWaybackUrls(
        user._id,
        userTVShow.TMDB_show_id
      );
      setUserWaybackUrls(userWaybacks || []);
    };
    if (user && userTVShow.TMDB_show_id) {
      getWaybacks();
      getUserWaybacks();
    } else {
      console.log('in wayback. user or userTV is undefined');
    }
  }, [currentEpisode]);

  const renderUserWayback = (wayback: UserWayback) => {
    if (!wayback) return <></>;
    if (!wayback.waybackUrl) {
      return (
        <>
          <a
            href={wayback.waybackUrl}
            target="_blank"
            rel="noreferrer noopener"
          >
            {wayback.name} ({'Current - No snapsnot found before next episode'})
          </a>
        </>
      );
    }

    if (wayback.waybackUrl === wayback.name) {
      return (
        <a href={wayback.waybackUrl} target="_blank" rel="noreferrer noopener">
          {wayback.name} ({'Current'})
        </a>
      );
    }

    return (
      <a href={wayback.waybackUrl} target="_blank" rel="noreferrer noopener">
        {wayback.name}
        <br /> (
        {extractDate(wayback.waybackUrl as string).toLocaleDateString() ||
          'None Found'}
        )
      </a>
    );
  };

  return (
    <StyledBackInTime>
      <div className="dropdown">
        <button className="dropbtn">
          {isLoading ? (
            <h5>Calculating Historic Websites from wayback machine</h5>
          ) : (
            <span>
              {show.name} related websites from before your next episode:{' '}
            </span>
          )}
          <img src={downArrow} />
        </button>
        {isLoading && (
          <>
            <ClockLoader
              loading={isLoading}
              color={'#ffffff'}
              size={200}
              speedMultiplier={3}
              css={`
                margin-top: 30px;
                margin-left: auto;
                margin-right: auto;
                display: block;
                border-color: red;
              `}
            />
          </>
        )}
        {!isLoading && (
          <div className="dropdown-content">
            {waybackUrls.facebook_id && (
              <a
                href={waybackUrls.facebook_id}
                target="_blank"
                rel="noreferrer noopener"
              >
                Facebook (
                {extractDate(
                  waybackUrls.facebook_id as string
                ).toLocaleDateString()}
                )
              </a>
            )}
            {waybackUrls.instagram_id && (
              <a
                href={waybackUrls.instagram_id}
                target="_blank"
                rel="noreferrer noopener"
              >
                Instagram (
                {extractDate(
                  waybackUrls.instagram_id as string
                ).toLocaleDateString() || 'None Found'}
                )
              </a>
            )}
            {waybackUrls.twitter_id && (
              <a
                href={waybackUrls.twitter_id}
                target="_blank"
                rel="noreferrer noopener"
              >
                Twitter (
                {extractDate(
                  waybackUrls.twitter_id as string
                ).toLocaleDateString() || 'None Found'}
                )
              </a>
            )}
            {waybackUrls.imdb_id && (
              <a
                href={waybackUrls.imdb_id}
                target="_blank"
                rel="noreferrer noopener"
              >
                IMDB (
                {extractDate(
                  waybackUrls.imdb_id as string
                ).toLocaleDateString() || 'None Found'}
                )
              </a>
            )}
            {waybackUrls.wikipediaId && (
              <a
                href={waybackUrls.wikipediaId}
                target="_blank"
                rel="noreferrer noopener"
              >
                Wikipedia (
                {extractDate(
                  waybackUrls.wikipediaId as string
                ).toLocaleDateString() || 'None Found'}
                )
              </a>
            )}
            {userWaybackUrls &&
              userWaybackUrls.length > 0 &&
              userWaybackUrls.map((wayback) => renderUserWayback(wayback))}
            <form>
              <div>
                <input
                  type="text"
                  placeholder="Enter your own website"
                  value={currentUserWayback}
                  onChange={(e) => setCurrentUserWayback(e.target.value)}
                />
              </div>
              <div>
                <button onClick={(e) => handleAddWayback(e)}>Add</button>
              </div>
            </form>
          </div>
        )}
      </div>
    </StyledBackInTime>
  );
}

export default Backintime;

const extractDate = (url: string) => {
  const regex = /\/([0-9]{4})([0-9]{2})([0-9]{2})[0-9]+\//;
  const match = url.match(regex);
  const dateString = match?.slice(1).join('-');

  if (dateString) return new Date(dateString);

  return new Date(Date.now());
};
