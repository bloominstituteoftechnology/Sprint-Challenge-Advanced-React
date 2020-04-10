import React, { Component } from 'react';
import './css/App.css';
import './css/all.min.css';
import Header from './components/Header';
import { PlayersList } from './components/PlayersList';


class App extends Component {
  constructor(){
    super();
    this.state = { 
      players: []
     
     }
  }

  componentDidMount(){
   
  };



  fetchPlayers = () => {
    fetch('http://localhost:5000/api/players')
    .then(response => response.json())
    .then(response => this.setState({players: response}))
    .catch(err => console.log('Houston we got a problem!', err));
  }

  
  
    
  
  render() { 

    return (
    <div className='App'>
      
      <Header fetchPlayers={this.fetchPlayers} playersData={this.state.players}/>
      <PlayersList playersData={this.state.players}/>
    </div>
    );
  }
}
 
export default App;
