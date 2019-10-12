import React from 'react';
import './App.css';
import GetAPI from './Components/GetAPI';
import DarkModeButton from './Components/DarkModeButton';

function App() {
  return (
    <div className="App">
      <h1>This is an app that lists the names of female soccer players.</h1>
      <DarkModeButton />
      {/* <GetAPI /> */}
    </div>
  );
}

export default App;
