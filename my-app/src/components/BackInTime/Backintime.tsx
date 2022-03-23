import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ClockLoader } from 'react-spinners';
import { getWaybackUrls } from '../../API/user-api';
import { BackintimeProps } from '../../proptypes';
import StyledBackInTime from './BackInTime.styled';
import downArrow from './image/down.png';

function Backintime({ show, currentEpisode }: BackintimeProps) {
  const [waybackUrls, setWaybackUrls] = useState<ExternalIds>(
    {} as ExternalIds
  );

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const user: User = useSelector<MainState>((state) => state.user.user) as User;

  useEffect(() => {
    // Add loading spinner
    setIsLoading(true);
    const getWaybacks = async () => {
      const result = await getWaybackUrls(user._id, show.TMDB_show_id);
      setWaybackUrls(result);
      setIsLoading(false);
    };

    getWaybacks();
  }, [currentEpisode]);

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
                margin-left: 25%;
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
            <form>
              <div>
                <input
                  type="text"
                  placeholder="Enter your own website, perhaps a subreddit?"
                />
              </div>
              <div>
                <button>Add</button>
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
