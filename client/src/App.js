import React from 'react'
import './App.css'
import PlayerList from './Components/PlayerList';
import NavBar from './Components/NavBar';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      player: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/players")
    .then(res => res.json())
    .then(data => {
      this.setState({ player: data })
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className = "App">
        <NavBar />
        <PlayerList players = {this.state.player} />
      </div>
    )
  }
}

export default App;