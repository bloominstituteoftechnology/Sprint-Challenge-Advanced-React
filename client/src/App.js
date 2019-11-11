import React, {Component, useState} from 'react';
import axios from 'axios';
import './App.css';
import PlayerCard from './components/playerCard';
import NavBar from './components/nav';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
    };
  }

  async componentDidMount() {
    console.log("App: componentDidMount called!");
      try {
        const PlayerData = await axios.get(
          "http://localhost:5000/api/players"
        );
        this.setState({
          players: PlayerData.data,
        })
        
      } catch(err){
        console.log(err);
      }
  };

  
  
  render() {
    console.log(this.state.players);
    return <header className="App-header">
      <NavBar/>
      <PlayerCard players = {this.state.players}/>
    </header>
  }
}

export default App;
