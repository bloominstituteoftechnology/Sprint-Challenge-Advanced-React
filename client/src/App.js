import React from 'react';
import axios from 'axios';
import NavBar from './components/NavBar';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = { 
      players: [], 
    }
  }

  
  componentDidMount = () => {
    this.getPlayers();
  }
  
  getPlayers = () => {
    axios.get('http://localhost:5000/api/players')
    .then(response => {
      //console.log(response.data);
      this.setState({ players: response.data})
    })
    .catch(error => {
      console.log('somthing went wrong ', error);
    })
  }
  
  render() {
    //console.log('in render: ',this.state.players);
    return (
      <div className="App">
        <NavBar />
        <div className="player-cards">
        {this.state.players.map((player) => (
          <div className="player-card">
          <h1>{player.name}</h1>
          <p>Country: {player.country}</p>
          <p>Searches: {player.searches}</p>
          </div>
        ))}
        </div>
      </div>
    );
  }
}

export default App;
