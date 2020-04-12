import React from 'react';
import './App.css';
import axios from "axios";
import Display from "./Display";


class App extends React.Component {
  constructor() {
      super();
      this.state = {
          players: []
      };
  };

  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
      .then((res) => {
        console.log(res); this.setState({players: res.data})
      })
        .catch((err) => console.log(err))
  }

render() {
  return(
      <div>
        <h2>{this.state.players.name}</h2>
        <Display playersData={this.state.players} />
      </div>
    );
  }
};
export default App;