import React from 'react';
import logo from './logo.svg';
import './App.css';
import PlayerCard from "./PlayerCard";
import PlayerList from "./PlayerList";



class App extends React.Component{
  constructor(){
    super();
    this.state={
      players:[]
    }
    }

  componentDidMount(){
    fetch("http://localhost:5000/api/players")
    .then(response=>response.json())
    .then(data=>this.setState({players:data}))
  }
  render(){
  return (
    <div className="App">
       <h1> Soccer Players</h1>
       <div>
       {this.state.players.map(player=> 
       <div key={player.id}>
       <h2> Name : {player.name}</h2>
       <h2> Country :{player.country}</h2>
       <h2> Searches :{player.searches}</h2>
       </div>
       )}
       </div>
    </div>
  );
}
}

export default App;
