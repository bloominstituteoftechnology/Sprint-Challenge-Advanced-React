import React, { useState, useEffect } from "react";
import './App.css';
import axios from 'axios';


  function App() {
    const [player, setPlayer] = useState("");
    useEffect(() => {

      axios
        .get("http://localhost:5000/api/players")
        .then(res => setPlayer(res.data.player))
        .catch(err => console.log('Error', err));
    }, []);

    return(

    <div>
    {player.map(players => {
  <div>
      <h2>{players.name}</h2>
      <h3>{players.country}</h3>
  </div>
    })}
  </div>
    )

export default App;
