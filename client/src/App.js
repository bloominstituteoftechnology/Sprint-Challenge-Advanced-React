import React from 'react';

import './App.css';
import PlayerCard from './Components/PlayerCard';
import NavBar from './Components/NavBar';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/players')
      .then(res => res.json())
      .then(player => {
        this.setState({players: player})
      })
      .catch((err) => {
        console.log(err)
      });
  }

  render() {
    return(
      <div>
        <NavBar />

        <h1>Woman's World Cup</h1>
        {this.state.players.map(players => {
          return (
            <PlayerCard key={players.id} players={players} />
          )
        })}
      </div>
    )
  }
} 

export default App;