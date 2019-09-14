import React, {Component} from 'react';
import './App.css';
import Axios from 'axios';
import { useDarkMode } from './components/useDarkMode';
import Toggle from './components/Toggle';

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
      console.log(res.data)
      this.setState({players: res.data})
    })
  }
  render() {
    const [darkMode, setDarkMode] = useDarkMode();
    const { players } = this.state;
    console.log(players);
      return (
        <div>
        <div className="navbar">
        <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
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