import React from 'react';
import NavBar from './components/NavBar'
import Players from "./components/Players";

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/players")
      .then(response => response.json())
      .then(players => this.setState({ players }));
  }

  render() {
    // console.log(this.state.players);
    return (
      <div className="App">
        <NavBar />
        <Players players={this.state.players}/>
      </div>
    );
  }
}

export default App;
