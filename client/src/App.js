import React from 'react';
import './App.css';
import "./styles.scss";
import Players from "./components/Players";
import NavBar from "./components/NavBar";

class App extends React.Component {

  constructor() {
    super() ;
    this.state = {
      playerData:[]
    }
  }

  componentDidMount(){
    fetch("http://localhost:5000/api/players")
        .then(res => res.json())
        .then(res => this.setState({playerData: res})
        )
        .catch(error => console.log(error))
  }
  render() {
    console.log(this.state.playerData)
  return (
    <div className="App">
      <header className="App-header">
      <NavBar />
      </header>
      <div className="players-list">
        <h2>Players List:</h2>
        {this.state.playerData.map(player =>
          <Players 
          player={player}>
          
          </Players>
          )}
      </div>
    </div>
  );
  }
}

export default App;
