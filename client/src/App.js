import React from 'react';
import "./styles.scss";
import axios from 'axios';
import { PlayerCard } from './components/PlayerCard';
import { NavigationBar } from './components/NavigationBar';

class App extends React.Component {
  constructor(){
    super ();
    this.state ={
      players: [],
    }
  }

  componentDidMount () {
    axios.get('http://localhost:5000/api/players')
    .then(response => {
      console.log("data",response)
      this.setState ({
        players: response.data
      })
    
      })
      .catch (error =>{
        console.log("Data not received", error)
    })
  }
  render () {
  return (
    <div >
        <NavigationBar />
       {this.state.players.map (player => (
        <PlayerCard key={player.id} name={player.name}
        country= {player.country}
        />
    ))}
      
    </div>
  );
  }
}

export default App;
