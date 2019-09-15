import React, {Component} from 'react';
import './App.css';
import Axios from 'axios';
import Navbar from './components/Navbar';

const API = 'http://localhost:5000/api/players';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
    };
  }
  componentDidMount() {
    Axios.get(API)
     .then(res => {
    this.setState({players: res.data})
    })
  }
  render() {
    const { players } = this.state;
    console.log(players);
      return (
        <div>
        <Navbar />
      
      <ul>
          {this.state.players.map(player =>
          <li key={player.id}>
        {player.name} from {player.country} with {player.searches} searches.
          </li>
        )}
      </ul>
      </div>
    );
  }
}
export default App;