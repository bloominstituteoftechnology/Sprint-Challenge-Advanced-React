import React from 'react';
import './App.css';
import Navigationbar from './hooks/Navigationbar';
// import {useDarkMode}  from "./hooks/useDarkMode";





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
       <Navigationbar/>
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
