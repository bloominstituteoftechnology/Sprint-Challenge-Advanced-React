import React from 'react';
import './App.css';
import Players from './components/Players';
import Nav from './components/Nav';

function App() {
  return (
    <div className='App'>
    <Nav />
    <div className='Title'><h1>Women's World Cup Players</h1></div>
      <Players />
    </div>
  );
}

export default App;
