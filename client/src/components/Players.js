import React from 'react';
import axios from 'axios';

export class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
    }
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/api/players`)
      .then(res => {
        this.setState({
          players: res.data

        })
      })
  }
  render() {
    return (
      <div>
        {this.state.players.map(player => <li key={player.id}>
          <h2>Name: {player.name}</h2>
          <h2>Country: {player.country}</h2>
          <h2>Searches: {player.searches}</h2>
        </li>)}
      </div>
    )
  }
}  