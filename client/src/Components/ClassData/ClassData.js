import React, { useEffect } from 'react';
import PlayerData from '../PlayerData/PlayerData';
import axios from 'axios';

import useLocalStorage from "../../hooks/useLocalStorage";

function ClassData() {
  const [players, setPlayers] = useLocalStorage("state", { "players": []}); // [storedValue, setValue]

  useEffect(() => {
    fetchApi();
  }, []); // runs once

  const fetchApi = () => {
    axios.get('http://localhost:5000/api/players')
      .then(res => {
          setPlayers(res.data);
      })
      .catch(err => {
        alert('An error with API has occurred: ', err)
      })
  }

  console.log("players", players)

  return (
    <div data-testid="test">
      {players.map((item, index) => (
        <PlayerData item={item} key={index} />
      ))}
    </div>
  )
}

export default ClassData;