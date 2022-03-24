import React from 'react';
import { ReelProps } from '../../proptypes';

function Reel({ userTVShows }: ReelProps) {
  return (
    <div>
      {userTVShows.map((show, index) => (
        <h2 key={index}>{show.name}</h2>
      ))}

    </div>
  );
}

export default Reel;
