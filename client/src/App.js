import React, { Component } from 'react';
import './App.css';
import PlayerList from "./components/PlayerList";
import axios from "axios";
import SearchForm from "./components/SearchForm";

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      name: "",
      country: ""
    };
  }

  componentDidMount() {
    axios 
    .get(`http://localhost:5000/api/players`)
    .then(result => {
        console.log(result.data);
        this.setState({
          data:Response.data,
          name: Response.data.name,
          country: Response.data.country
        });
    })
    .catch(error => {
        console.log("error:", error);
    });
  }

  render() {
      return (
        <div className="App">
          <h1>Most Searched Women's Soccer Players</h1>
          <SearchForm 
            data={this.state.data}
            name={this.state.name}
            country={this.state.country}
          />
          <PlayerList 
            data={this.state.data}
            name={this.state.name}
            country={this.state.country}
          />
        </div>
    )
  }
}

export default App;
