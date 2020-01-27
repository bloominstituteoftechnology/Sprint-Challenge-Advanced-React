import React, { useState } from 'react';
import Form from './Form';
import './App.css';

class App extends React.Component {
  state = {
    players: [],
    playerName: [],
    playerCountry: [],
    searches: [],
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/players')
    .then(res => res.json())
    .then(players => {
      console.log(players)
      this.setState({...this.state, players: players})
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App" data-testid='App'>
        <div className='header'>
          <h1 data-testid='title'>Players</h1>
          {/* <Form /> */}
          <div data-testid='returned-cards' className='player-cards'>
            {this.state.players.map(player => (
              <div key={player.id}>
                <h2 className='name'>{player.name}</h2>
                <p>{player.country}</p>
                <p>{player.searches}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
