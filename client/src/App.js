import React, {Component}from 'react';
import { Card} from 'semantic-ui-react';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      player: []
    };
  }

  componentDidMount(){
    fetch("http://localhost:5000/api/players")
      .then(res => res.json())
      //.then(res => console.log(res) )
      .then(res => {
        //debugger;
        this.setState({player:res})})
      .catch(err => console.log('Error', err))
  }

  render(){
    return(

    <div className='player'>
    {this.state.player.map(banana => (
    
    <div className='card'>
   
      <h2>{banana.name}</h2>
      <h3>{banana.country}</h3>
  
  </div>
    ))}
  </div>
    )}}

    export default App;
