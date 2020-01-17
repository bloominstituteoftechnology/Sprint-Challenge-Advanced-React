import React, { Component }from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/Navbar';

class App extends Component {
  constructor (){
    super()
    this.state = {
      Players: []


    }
  }

  componentDidMount(){
    axios.get('http://localhost:5000/api/players').then(response =>{
      

      this.setState ({

        Players:response.data
      })
    })
  }

  render(){
    return(
      <div className='Container'>
        <Navbar/>

        {this.state.Players.map(player => {
          return(
            <div className='playercard'>

              <p>{player.name}</p>
              <p>{player.country}</p>
              <p>{player.searches}</p>
            </div>
          )
        })}
      </div>
    )
  }
}

export default App;