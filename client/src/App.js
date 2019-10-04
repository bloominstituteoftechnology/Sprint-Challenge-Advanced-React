import React, {useState, useEffect} from 'react';
import './App.css';

import axios from 'axios';

import PlayerList from './components/PlayerList.js';
import Navbar from './components/NavBar.js';

function App() {
  const [players, setPlayers] = useState([])



  useEffect(() => {
    axios
    .get('http://localhost:5000/api/players')
    .then(res => {
      console.log(res.data)
      setPlayers(res.data);
    })
    .catch(error => {
      console.log('Server Error', error)
    })

  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <h1>Women's World Cup</h1>
      <PlayerList players={players} />
      </header>
    </div>
  );
}
export default App;