import React from 'react';
import axios from 'axios';

class PlayerData extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
      .then(res => {
        console.log(res.data);
        const players = res.data;
        this.setState({players})
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div>
        { this.state.players.map(player => <div>{player.name}</div>) }
      </div>
    )
  }

}

export default PlayerData;