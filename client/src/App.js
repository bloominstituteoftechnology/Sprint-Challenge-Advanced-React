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
    .then(res => {
      console.log("data", res)
      this.setState({players: res.data})
    })
    .catch (err => {console.log("No data", err)
  })
  }
  render(){
    return (
      <div className="App">
        <Navigation />
        {this.state.players.map (player => (
          <PlayerList key={player.id} name={player.name} country={player.country} />
        ))}

      </div>
    );
  }
}

export default App;
