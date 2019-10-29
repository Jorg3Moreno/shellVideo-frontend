import React from "react";

import "../assets/styles/Player.scss";

const Player = props => {
  const { id } = props.match.params;

  return (
    <div className="player">
      <video controls autoPlay>
        <source src="" type="video/mp4" />
      </video>
      <div className="player__back">
        <button type="button" onClick={props.history.goBack}>
          Back
        </button>
      </div>
    </div>
  );
};

export default Player;
