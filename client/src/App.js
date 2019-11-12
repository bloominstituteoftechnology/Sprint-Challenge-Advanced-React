import React from 'react';
import PlayerCard from './components/PlayerCard.js';
import useDarkModeToggle from './DarkModeToggle/useDarkModeToggle.js'

import './App.css';


function App() {
  return (
    <div className="App">
      <useDarkModeToggle />
      <h1>Women's World Cup Players</h1>
      <PlayerCard />
    </div>
  );
}

export default App;
