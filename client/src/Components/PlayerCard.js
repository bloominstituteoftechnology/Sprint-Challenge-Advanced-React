import React from 'react';

const PlayerCard = props => {
  return (
    <div>
      <h3>{props.players.name}</h3>
      <p>{props.players.country}</p>
    </div>
  )
}

export default PlayerCard;