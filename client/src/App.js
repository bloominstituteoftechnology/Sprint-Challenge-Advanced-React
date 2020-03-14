import React from 'react';
import './App.css';
import Players from './components/Players';
import Navbar from './components/Navbar';
import SearchForm from "./components/SearchForm";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchForm />
      <Players />
    </div>
  );
}

export default App;
