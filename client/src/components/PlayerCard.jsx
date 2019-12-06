import React from "react";

function PlayerCard({ player }) {
  return (
    <div className="playerCard">
      <h3>{player.name}</h3>
      <p>{player.country}</p>
      <p>{player.searches}</p>
    </div>
  );
}

export default PlayerCard;
