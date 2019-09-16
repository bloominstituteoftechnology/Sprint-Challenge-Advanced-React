import React from 'react';
import logo from './logo.svg';
import './App.css';
import GetPlayers from './GetPlayers';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>This Sporting Game Exists</h1>
      </header>
      <body>
        <GetPlayers/>
      </body>
    </div>
  );
}

export default App;
