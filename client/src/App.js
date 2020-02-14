import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import PlayerCard from './components/PlayerCard';
import DarkMode from './components/DarkMode';
import TestAxios from './components/TestAxios'

class App extends Component {

  constructor() {
    super();
    this.state ={
      data: []
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/players')
      .then(res => {
        console.log(res);
        this.setState({
          data: res.data
        })
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Searched Players:</h1>
        </header>
        <DarkMode />
        <PlayerCard data={this.state.data} />
        <TestAxios url='https://jsonplaceholder.typicode.com/posts/1' />
      </div>
    );
  }
  
}

export default App;