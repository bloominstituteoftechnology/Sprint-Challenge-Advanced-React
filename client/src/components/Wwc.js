import React from 'react';
import axios from 'axios';
import PlayersList from './PlayersList'



//dont need constructor because dont need to bind anything
class Wwc extends React.Component{
  state = {
    players:[],
    
  }


  componentDidMount(){
    axios
    .get("http://localhost:5000/api/players")
    .then(response => {
      console.log(`axios`,response)
      console.log(`axios.data`,response.data) //array
        this.setState({
          players: response.data
        }) 
    })
    .catch(err => console.log(err))
  }

 

  render() {
    return(
      <div>

        {this.state.players.map(person =>(
          <PlayersList person={person}/>
        ))}
        
      </div>
    )
  }
}

export default Wwc;