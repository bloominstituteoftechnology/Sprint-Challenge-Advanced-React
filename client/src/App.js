import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import Player from './components/Player';
import RainbowToggle from "./components/RainbowToggle"
/*

fetch data via axios
display it on screen in a div

*/

class App extends React.Component {
  // set up constructor, super, render and initialize state
  constructor() {
    super();
    this.state = {
      players: [],
    };
    // 100: {name: "Tierna Davidson", country: "United States", searches: 1, id: 100}
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/players').then((response) => {
      // console.log(response);
      this.setState({ players: response.data });
      // console.log(this.state.players);
    })
    .catch(error => {
      console.log(error)
    return <h1>you have a get-request error</h1>
    })
  }
  render() {
   
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Women's World Cup Players</h2>
          <h5>Ranked according to popularity</h5>
          <RainbowToggle/>
          <div className='playerContainer'>
            {this.state.players.map((player) => {
              return <Player key = {player.id} id={player.id} name={player.name} country={player.country} searches={player.searches} />;
            })}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
