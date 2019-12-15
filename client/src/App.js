import React, { Component } from 'react';
import './App.css';
import PlayerList from "./components/PlayerList";
import SearchForm from './components/SearchForm';

class App extends Component {
  constructor() {
    super()
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    fetch(`http://localhost:5000/api/players`)
    .then(result => result.json())
    .then(result => this.setState({ players: result }))
    .catch(error => {
        console.log("error:", error);
    });
  }

  render() {
      return (
        <div className="App">
          <h1>Most Searched Women's Soccer Players</h1>
          {/* <SearchForm /> */}
          <PlayerList players={this.state.players} />
        </div>
    )
  }
}

export default App;
