import React from 'react';
import logo from './logo.svg';
import './App.css';
import Player from "./components/Player";

export default class App extends React.Component {
  render() {
    return(
      <div className="App">
        <Player />
      </div>
    );
  }
}