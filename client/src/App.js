import React from 'react';
import './App.css';
import Player from './Components/Player';
import NavBar from './Components/NavBar';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <div className="container">
          <Player />
        </div>
      </header>
    </div>
  );
}
export default App;
