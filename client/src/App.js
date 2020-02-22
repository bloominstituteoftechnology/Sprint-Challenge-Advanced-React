import React from 'react';
import axios from 'axios';
import Players from './components/Players';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
      .then(res => {
        console.log('!', res);
        this.setState({
          players: res.data
        });
      })
      .catch(err => console.log('err'));
  }

  render() {
    return (
      <div className="App">
        <h2>{this.state.players.name}</h2>
        <Players playersData={this.state.players} />
      </div>
    );
  }
}

export default App;
