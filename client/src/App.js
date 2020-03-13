import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Card from "./components/Card"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="App">
      <Navbar/>
   <Card/>
    </div>
  );
}

export default App;