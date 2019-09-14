import React from 'react';
import PlayerCard from "./components/PlayerCard";
import Navbar from "./components/NavBar";
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
    data:[]
    
   }
  }
   componentDidMount() {
    console.log('CDM');
    fetch('http://localhost:5000/api/players')
      .then(res => res.json())
      .then(names => this.setState({ data: names} ) 
      )
      .catch(err => console.log('noooo'));

      
  }


   
   render() {
    return (
      <div>
      <div className="App">
        <Navbar />
      </div>
      <div className="cards">
        <h1>{console.log(this.state.name)}</h1>
         {this.state.data.map(players => <PlayerCard players={players}/>)}
      </div>
      </div>
    );


}
};
export default App;