import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      players :[]
    };
  }  
  componentDidMount(){
    fetch("http://localhost:5000/api/players")
    .then(res => res.json())
    .then (res => {
      console.log("response from the API", res)
      this.setState({...this.state, players:res})
    })
    .catch(err => console.log(err));
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
        hello there
        </header>
      </div>
    );
  }
}

export default App;
