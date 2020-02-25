import React from 'react';
import axios from 'axios';
import Navigation from './components/Navigation';
import PlayerList from './components/PlayerList';

import './App.css';

class App extends React.Component {
  constructor() {
    super ();
    this.state ={
    players:[],
  }
}
  componentDidMount() {
    axios
    .get('http://localhost:5000/api/players')
    .then(response => {
      console.log("data", response)
      this.setState({players: response.data})
    })
    .catch (err => console.log(err));
  }
  render(){
    return (
      <div className="App">
        <h1>Women's World Cup Players</h1>
        <Navigation />
        {this.state.players.map (player => (
          <PlayerList key={player.id} name={player.name} country={player.country} />
        ))}

      </div>
    );
  }
}


export default App;
