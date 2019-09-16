import React, { Component } from "react";
import './App.css';
import './index.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  //useEffect does
  componentDidMount(){
    fetch("http://localhost:5000/api/players")
      .then(res => res.json())
      //.then(res => console.log(res) )
      .then(res => {
        //debugger;
        this.setState({players:res})})
      .catch(err => console.log('Error', err))
  }

  render() {
    return(

      <div className='app'>
        <h1 class='title'>Women's World Cup</h1>
        <h3>Created By: Kayla Dailey</h3>
        <br></br>
        <h3>Dark Mode:</h3> 
        <nav className='navbar'>
          <div className="dark-mode_toggle">
          <div className='toggle'></div>
          </div>
        </nav>
        {this.state.players.map(player => (
       <div className ='list'>
      <div className='card'>
        <h1>{player.name}</h1>
        <h2>{player.country}</h2>
        <p>{player.id}</p>
        </div>
        </div>
        ))}
        </div>
    );
        }
      }

export default App;
