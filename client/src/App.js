import React from 'react';
import './App.css';

import Typography from '@material-ui/core/Typography';

import PlayerList from './components/PlayerList';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      players: []
    }
  }
  componentDidMount(){
    fetch('http://localhost:5000/api/players')
      .then(res => res.json())
      .then(res => this.setState({ players: res }))
      // .then(res => console.log(res))
      .catch(err => console.log(err))
  }
  render(){
    return(
      <div className="App">
        <Typography variant="h1" color="primary">Women's World Cup Players</Typography>
        <PlayerList players={this.state.players} /> 
      </div>
    )
  }
}
export default App;