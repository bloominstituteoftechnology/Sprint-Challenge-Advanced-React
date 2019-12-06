import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      playerData: {}
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/api/players`)
      .then(res => {
        console.log(res.data);
        this.setState({ playerData: res.data });
      })

  }



  render() {
    console.log(this.state.playerData[0]);
    return <div>{this.state.message}</div>;
  }
}
export default App;
