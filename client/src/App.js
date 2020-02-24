import React from 'react';
<<<<<<< HEAD
import axios from 'axios';
import Navigation from './components/Navigation';
import PlayerList from './components/PlayerList';
=======
import DMHeader from "./components/DMHeader";
import SearchForm from "./components/SearchForm";
import PlayerList from "./components/PlayerList";
import axios from "axios";
>>>>>>> 0c5cbbd7c134c64ba074c7ca833b658cf31b2cc6

import './App.css';

class App extends React.Component {
  constructor() {
<<<<<<< HEAD
    super ();
    this.state ={
    players:[],
  }
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
      <div className="App">
        <Navigation />
        {this.state.players.map (player => (
          <PlayerList key={player.id} name={player.name} country={player.country} />
        ))}

      </div>
    );
  }
=======
    super();
    this.state = {
      data: [],
      name: "",
      country: ""
    };
  }

componentDidMount() {
  console.log("Mount Works!");

  axios
  .get("https://localhost:5000/api/players")
  .then(res => {
    console.log(res.data);
    this.setState({
      data: res.data,
      name: res.data.name,
      country: res.data.country
    });
  })
  .catch(error => console.log("Players Benched!"));
}

  render() {
  return (
    <div className="App">
      <DMHeader />

      <PlayerList
      data={this.state.data}
      name={this.state.name}
      country={this.state.country}
       />
    </div>

  );
>>>>>>> 0c5cbbd7c134c64ba074c7ca833b658cf31b2cc6
}
}

export default App;
