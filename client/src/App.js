import React, {Component} from 'react';
import axios from 'axios'
import './App.css';
import Display from './Display';
import Navbar from './Navbar';


class App extends React.Component {
  constructor(){
  super();

  this.state = {
    players: []
  }
}

  componentDidMount() {
  axios
      .get('http://localhost:5000/api/players')
      .then(res => {
        this.setState({players: res.data})
      })
      .catch(err => console.log(err));
  

}
  render() {
  return (
    <div className='App'>
      <Navbar />
    {this.state.players.map(player => (
      <Display name={player.name} country={player.country} searches={player.searches} id={player.id} key={player.id}  />
    ))}
    </div>
  );
}
}

export default App;
