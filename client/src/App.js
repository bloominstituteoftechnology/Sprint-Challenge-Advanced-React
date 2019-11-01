import React from 'react';
import axios from 'axios';

import PlayersList from './components/playersList';
import Navbar from "./components/Navbar"
import './App.scss';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      players: [],
    }
  }

  componentDidMount(){
    this.mounted = true;
    axios
    .get('http://localhost:5000/api/players')
    .then(res => {
      // console.log(res.data);
      this.setState({ players: res.data })
    })
    .catch(err => console.log(err))
  }
  
  // componentWillMount(){
  //   this.mounted = false;
  // }

  render(){
    return (
      <div className="App">
        <Navbar/>
        <PlayersList players={this.state.players}/>
      </div>
    );
  }
}

export default App;
