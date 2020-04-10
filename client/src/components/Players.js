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
      .get('http://localhost:5000/api/players')
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
          <h3>Name: {player.name}</h3>
          <h5>Country: {player.country}</h5>
          <h4>Searches: {player.searches}</h4>
        </li>)}
      </div>
    )
  }
}
