import React, { Component } from 'react';
import axios from "axios";
import Players from "./components/Players";

import './App.css';

class App extends Component{

  state = {
    players: [],
  };

  componentDidMount() {
    axios
    .get('http://localhost:5000/api/players')
    .then(response => {
      console.log(response)
      this.setState({ players: response.data});
    })
    .catch(err => console.log('api error', err));
  }


  render(){
    return (
      <div className="App">
        <Players players={this.state.players}/>
        
      </div>
    );//ends return
  }//ends render
}

export default App;
