import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import Nav from './components/Nav'

class App extends React.Component {

  state = {
    players: [],
    playersText: ''
  };

componentDidMount(){
  axios.get('http://localhost:5000/api/players').then(response => {
    this.setState({players: response.data})
  })
  window.addEventListener('resize', this.handleResize);
}
componentWillUnmount() {
  window.removeEventListener('resize', this.handleResize);
}

render(){
  return(
    <div className="App">
        <Nav/>
      <div className="players">
        {this.state.players.map(player=>(
          <div>
          <h2>{player.name}</h2>
          <h3>{player.country}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}
}

export default App;