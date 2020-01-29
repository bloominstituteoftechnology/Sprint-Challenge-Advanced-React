import React from 'react';
import Player from "./components/Player";
import Navbar from "./components/Navbar";
import './App.css';


export default class App extends React.Component {
  render() {
    return(
      <div className="App">
        <Navbar />
        <Player />
      </div>
    );
  }
}