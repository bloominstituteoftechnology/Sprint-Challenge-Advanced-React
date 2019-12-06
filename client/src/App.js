import React from 'react';
import axios from 'axios';
import './App.css';

import PlayersList from './components/PlayersList.js';
import DarkModeToggleButton from './components/DarkModeToggleButton.js';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      players: [],
    }
  }  

  componentDidMount(){
    axios.get(`http://localhost:5000/api/players`)
    .then(resp => {
      this.setState({ players: resp.data })
    })
    .catch(err => console.log('Error inside axios call: ', err));
  }

  render() {
    return (
      <div className="App">
        <DarkModeToggleButton />
        <PlayersList
           players={this.state.players}
        />
      </div>
    );
  };
}

export default App;