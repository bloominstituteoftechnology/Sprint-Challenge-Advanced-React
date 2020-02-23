import React from 'react';
import axios from 'axios';

import './App.css';

class App extends React.Component {
  state = {
    players:[]
  }
  componentDidMount() {
    axios
    .get('http://localhost:5000/api/players')
    .then(res => {
      console.log("data", res)
      this.setState({players: res.data})
    })
    .catch (err => {console.log("No data", err)
  })
  }
  render(){
    return (
      <div>

      </div>
    );
  }
}

export default App;
