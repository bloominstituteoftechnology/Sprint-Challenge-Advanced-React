import React, { Component } from "react";


class Team extends Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }
  componentDidMount(){
    fetch("http://localhost:5000/api/players")
      .then(res => res.json())
      //.then(res => console.log(res) )
      .then(res => {
        this.setState({players:res})})
      .catch(err => console.log('Error', err))
  }
  render() {
    return(
      <div className='app'>
        <h3>Created By: Kayla Dailey</h3>
        {this.state.players.map(player => (
       <div key={player.id} className ='list'>
       <div className='card'>
        <h1>{player.name} </h1>
        <h2>{player.country}</h2>
        <p>{player.searches}</p>
        </div>
        </div>
        ))}
        </div>
     )}}
export default Team;