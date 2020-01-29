import React from 'react';
import Player from "./components/Player";
import './App.css';


export default class App extends React.Component {
  render() {
    return(
      <div className="App">
        <Player />
      </div>
    );
  }
}