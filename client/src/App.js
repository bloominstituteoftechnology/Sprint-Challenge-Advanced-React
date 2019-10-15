import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';
import Display from './Display';
import Navbar from './Navbar';

function App() {
  const [players, setPlayers] =useState([]);

useEffect(() => {
  axios
      .get('http://localhost:5000/api/players')
      .then(res => setPlayers(res.data))
      .catch(err => console.log(err));
  

}, [])

  return (
    <div className='App'>
      <Navbar />
    {players.map(player => (
      <Display name={player.name} country={player.country} searches={player.searches} id={player.id} key={player.id} />
    ))}
    </div>
  );
}

export default App;
