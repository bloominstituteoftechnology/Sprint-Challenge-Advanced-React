import React, {Component, useState} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';
import './App.css';
import PlayerCard from './components/playerCard';
import NavBar from './components/nav';
import Graph from './components/graph';


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
      <Route exact path="/" 
      render ={() =>(
      <PlayerCard
      players = {this.state.players}
      />)}/>

    <Route path="/graph" 
      render ={() =>(
      <Graph
      data = {this.state.players}
      />)}/>
     
    </header>
  }
}

export default App;
