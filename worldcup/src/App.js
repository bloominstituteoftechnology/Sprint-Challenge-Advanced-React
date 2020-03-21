import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar.js'
import Form from './Components/Form.js'
import { render } from '@testing-library/react';

class App extends React.Component{
  constructor(){
    super()
    this.state={
      players:[]
    };
  }
  
  
  componentDidMount() {
    fetch('http://localhost:5000/api/players')
    .then(res => res.json())
    .then(playersRes=>{
        console.log('playersRes from app.js:',playersRes)
        this.setState({ players: playersRes })
    })
    .catch(err => console.error(err));
  }

  render(){
    return (
      <div className="App">
        <NavBar/>
        <Form/>
      
       {this.state.players.map(player=>{
         return(<div><h2>{player.name}</h2><p>{player.country}</p></div>)
       })}
      </div>
    );

  }
}
 

  

export default App;
