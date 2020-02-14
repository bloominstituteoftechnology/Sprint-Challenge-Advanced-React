import React, { Component } from "react";
import axios from "axios";
import DarkMode from "./DarkMode";
import "./App.css";

export default class App extends Component {
  state = {
    players: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        console.log(res);
        this.setState({
          players: res.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log("state", this.state.players);
    return (
      <div className="App" data-testid="app">
        <DarkMode />
        {this.state.players.map(player => (
          <div key={player.id}>
            <p>Name: {player.name}</p>
            <p>Country: {player.country}</p>
            <p># of searches: {player.searches}</p>
            <br />
          </div>
        ))}
      </div>
    );
  }
}
