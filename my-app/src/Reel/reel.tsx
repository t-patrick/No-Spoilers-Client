import React from "react";

/**
 * Needs: A UserTVShowArray
 *
 */

function Reel(props: ReelProps) {
  const shows = props.userTVShows;

  return (
    <div>
      {shows.map((show) => {
        <div></div>;
      })}
    </div>
  );
}

export default Reel;
