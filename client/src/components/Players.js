import React from 'react';
import axios from 'axios';

class Players extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    players: [],
      // players: [{ id: 1, name: 'Lisa', country: 'USA', searches: 'foo' }],
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
        {this.state.players.map(player => <div key={player.id}>

            <p id="NameTag">Name</p>
            <h3>{player.name}</h3>

          <h5>Country: {player.country}</h5>
          <h4>Searches: {player.searches}</h4>
        </div>)}
      </div>
    )
  }
}

export default Players;
