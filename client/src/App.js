import React from 'react';
import logo from './logo.svg';
import './App.css';
import PlayersList from './components/PlayersList'
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <PlayersList/>
    </div>
  );
}

export default App;
