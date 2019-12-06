import React from 'react'
import './App.css'
import PlayerList from './Components/PlayerList';
import NavBar from './Components/NavBar';

//First phase of the lifecycle 
class App extends React.Component {
  constructor () {
    super();
    this.state = {
      player: []
    }
  }

  //Mounting Cycle
  //"Commit Phase"
  componentDidMount() {
    fetch("http://localhost:5000/api/players")
    .then(res => res.json())
    .then(data => {
      this.setState({ player: data })
    })
    .catch(err => console.log(err))
  } //end of mounting cycle 

  //render function 
  render() {
    return (
      <div className = "App">
        <NavBar />
        <PlayerList players = {this.state.player} />
      </div>
    )
  };//end of render function 

};

export default App;