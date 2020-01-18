import React from 'react';
import PlayerList from './components/PlayerList';
import DarkModeToggle from './components/DarkModeToggle';
import './App.css';

function App() {
  return (
    <div className="App">
      <DarkModeToggle />
      <PlayerList />
    </div>
  );
}

export default App;
