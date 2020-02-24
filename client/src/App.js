import React, { useState, useEffect } from 'react';
import axios from 'axios';
import playerList from './components/playerList';

function App() {
  const [player, setPlayer] = useState();
 
  useEffect(() => {
    const getPlayers = () => {

      axios
        .get(`http://localhost:5000/api/players`)
        .then(response => {
          setPlayer(response.data);
          console.log(response.data)
        })
        .catch(error => {
          console.error(error);
        });

        getPlayers();
  }, []});
  
  if (!playerList) {
    return <div>Loading player information...</div>;
  }
  
  const { player } = player;
  
  return (
    <div className="save-wrapper">
      <div className="player-card">
          Names: <em>{players}</em>
      </div>
        {players.map(players => (
          <div key={players} className="player-map">
            {players}
          </div>
        ))}
      </div>
    );
  } 

export default App;
