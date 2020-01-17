import React, { Component } from 'react';
import axios from 'axios';
import PlayersList from './components/PlayersList';

class App extends Component {
  constructor(){
    super();
    this.state={
      players: []
    };
  }

  componentDidMount(){
    axios
      .get('http://localhost:5000/api/players')
      .then(res => {
        console.log(res.data);
        this.setState({
          players: res.data
        });
      })
      .catch(err => console.log(err)); 
  }
  render() {
    return (
      <div>
          <PlayersList players={this.state.players} />
      </div>
    );
  }
}


export default App;
