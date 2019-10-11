import React from "react";

const Players = props => {
  console.log("players props: ", props);
  return (
    <div>
      <div className="player-card" data-testid="players">
        <h2>Name: {props.player.name}</h2>
        <h2>Searches: {props.player.searches}</h2>
        <h3>Country: {props.player.country}</h3>
      </div>
    </div>
  );
};

export default Players;
