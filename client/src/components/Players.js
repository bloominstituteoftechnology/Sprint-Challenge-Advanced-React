import React from 'react';

import PlayerCard from './PlayerCard';

export default function Players(props) {
  return (
    <div className='players-wrapper'>
      {props.data.map(player => (
        <PlayerCard key={player.id} data={player} />
      ))}
    </div>
  );
}