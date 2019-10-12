import React from 'react';
import './App.css';
import GetAPI from './Components/GetAPI';

function App() {
  return (
    <div className="App">
      <h1>This is an app that lists the names of female soccer players.</h1>
      <GetAPI />
    </div>
  );
}

export default App;
