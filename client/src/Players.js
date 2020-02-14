import React from 'react';
import useFetch from './Fetch';

function Players() {
  const res = useFetch('http://localhost:5000/api/players', {});
  if (!res.response) {
    return <div>Loading...</div>
  }
  const playerData = res.response;

  return (
    playerData.map(player => {
      return (
        <div key={player.id}>
          <h1>{player.name}</h1>
          <p>{player.country}</p>
        </div>
      )
    }
    )
  )
  
}

export default Players;