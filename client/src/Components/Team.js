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
       <h1 className='title'>Women's World Cup</h1>
       <h3>Created By: Nick Dailey</h3>
       <br></br>  
    {this.state.players.map(player => (
      <div className ='list'>
     <div className='card'>
       <h1>{player.name}</h1>
       <h2>{player.country}</h2>
       <p>{player.searches}</p>
       </div>
       </div>
       ))}
       </div>
   );
       }
     }
export default Team;


