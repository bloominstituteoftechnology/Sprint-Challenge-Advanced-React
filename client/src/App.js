import React from 'react';
import axios from 'axios';
import Players from './components/getPlayers.js';
import Navbar from "./components/Navbar";
import useLocalStorage from './hooks/useLocalStorage';
import './App.css';

class App extends React.Component { 
    state = {
      players:[]
    }
  componentDidMount() {
    const URL = 'http://localhost:5000/api/players';
    axios.get(`${URL}`)
      .then(response => {
        this.setState({
          players: response.data
        })
      })
        .catch(error => {
          console.log(error);
        })
    }
  render() {
    return  (
     <>
        <Navbar/>
        <Players data={this.state.players}/>
     </> 
    );
  }}
export default App;