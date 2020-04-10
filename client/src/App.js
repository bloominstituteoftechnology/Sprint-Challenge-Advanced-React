import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

class App extends React.Component {
  constructor() {
      super();
      this.state = {
          users: [],
          followers: []
      };
  };

componentDidMount() {
  axios.get("http://localhost:5000/api/players").then(response => {
    this.setState({
      players: response.data,
    });
  });
}

render() {
  return(
      <div>
        <h1>hello</h1>
      </div>
     
    );
  }
};

export default App;