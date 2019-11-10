import React from 'react';
import PlayerCard from './components/PlayerCard.js';
import DarkModeToggle from './DarkModeToggle/useDarkModeToggle.js/index.js'

import './App.css';


function App() {
  return (
    <div className="App">
      <DarkModeToggle />
      <h1>Women's World Cup Players</h1>
      <PlayerCard />
    </div>
  );
}

export default App;
