import React, {Component}from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/nav';


class App extends Component {
  constructor (){
    super()
    this.state = {
      Players: []
      
      
    }
  }

  componentDidMount(){
    axios.get('http://localhost:5000/api/players').then(response =>{
      console.log(response.data)

      this.setState ({
        
        Players:response.data
      })
    })
  }

  render(){
    return(
      <div>
        <Navbar/>
        
        {this.state.Players.map(player => {
          return(
            <div>
              
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
