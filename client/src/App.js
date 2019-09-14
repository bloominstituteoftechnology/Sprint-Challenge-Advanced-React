import React from 'react';
import './App.css';
import Players from "./components/Players";

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
      <h1>Sprint Challenge: Advanced React - Women's World Cup</h1>
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
