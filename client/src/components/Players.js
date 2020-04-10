import React from 'react';
import axios from 'axios';

export class Player extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      players: []
    }
}
componentDidMount() {
  axios.get('http://localhost:5000/api/players')
    .then((res) => {
      console.log(res); this.setState({players: res.data})
    })
      .catch((err) => console.log(err))
}
  render() {
    return (
      <div>
        {this.state.players.map(player =>
        <li key={player.id}>
          <h2>name={player.name}</h2>
          <h3>contry={player.country}</h3>
          <h2>searches={player.searches}</h2>
        </li>)}
      </div>
    )

  }
}

