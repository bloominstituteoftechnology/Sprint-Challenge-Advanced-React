import React from 'react';
import './App.css';
import PlayerCard from "./components/PlayerCard.js"
import NavBar from "./components/NavBar.js"
import RenderLineChart from "./components/Chart"

class App extends React.Component{
  constructor(){
    super();
    this.state={
      players :[]
    };
  }  
  componentDidMount(){
    fetch("http://localhost:5000/api/players")
    .then(res => res.json())
    .then (res => {
      console.log("response from the API", res)
      this.setState({...this.state, players:res})
    })
    .catch(err => console.log(err));
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
        <NavBar 
          players ={this.state.players}/>
        <RenderLineChart
          players ={this.state.players}/>
        <PlayerCard
          players ={this.state.players}/>
        </header>
      </div>
    );
  }
}

export default App;
