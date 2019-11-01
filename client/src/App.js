import React from 'react';
import axios from 'axios';
import './App.css';
import fetchDataHook from './fetchDataHook'
import NavBar from './navbar'

let dataCount = 0;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
      .then(res => {
        this.setState({
          data: res.data
        })
        dataCount = this.state.data.length;
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <NavBar />  
        <h1>Women's World Cup Data</h1>
        {this.state.data.map(item => <div>Name: {item.name} Country: {item.country} Searches: {item.searches}</div>)}
      </div>
    )
  }
}
  
export default App;