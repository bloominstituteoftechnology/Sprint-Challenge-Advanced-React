import React, { useState, useEffect } from 'react';
import PlayerList from './components/PlayerList';
import axios from 'axios';
import Navbar from './components/Navbar'
import './styles.scss';

function App() {
  const [players, setPlayers] = useState([]);

  useEffect(()=>{
    axios
    .get('http://localhost:5000/api/players')
    .then(res=>{
      console.log(res)
      setPlayers(res.data);
      console.log(players)
    })
  },[])

  console.log(players)

  return (
    <div className="App">
      <Navbar/>
      <PlayerList players = {players} data-testid = 'playerlist'/>
    </div>
  );
}

export default App;
