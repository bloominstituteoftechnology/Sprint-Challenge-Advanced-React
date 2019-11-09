import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './components/Display'

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      players : []
    
}

  }

  // const [players, setPlayers]=useState([]);


  componentDidMount(){
   fetch(`http://localhost:5000/api/players`)
   .then(res => res.json())
   .then(res=> this.setState({players: res}))
   .catch(err => console.log(err))

}





   


 
  render(){

    console.log(this.state.players)

  return (

    
    <div className="App">
      <header className="App-header">
        <h1>Women's World Cup Soccer</h1>
      </header>
       <Display players = {this.state.players}/>
    </div>
  );}
}

export default App;
