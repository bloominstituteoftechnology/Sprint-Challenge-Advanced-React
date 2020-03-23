import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import PlayerList from './PlayerList';
import Navbar from './NavBar';

class App extends Component {
  state = {
    data: []
  }

  componentDidMount(){
    axios
      .get('http://localhost:5000/api/players')
      .then(response => {
        console.log(response.data)
        this.setState({data:response.data})
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return (
      <div>
        <Navbar/>
        <PlayerList data={this.state.data}/>
      </div>
    );
  }
}

export default App;

