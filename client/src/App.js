import React, {Component}from 'react';
import { Card } from 'semantic-ui-react';
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
      .then(res => console.log(res) )
      .then(res => {
        //debugger;
        this.setState({player:res})})
      .catch(err => console.log('Error', err))
  }

  render() {
    return(
  
    <div className='Profile'>
      <Card className='Profile-Card'>
        <Card.Content>
          <Card.Header>{this.state.player.name} </Card.Header>
            {this.state.player.contry}
        </Card.Content>
      </Card>
    </div>
    )}}

export default App;
