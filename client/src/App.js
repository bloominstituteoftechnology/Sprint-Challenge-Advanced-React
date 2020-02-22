import React from "react";
import "./App.css";
import axios from "axios";
import PlayerCard from "./components/PlayerCard";
import DarkMode from "./components/DarkMode";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(response => {
        this.setState({ data: response.data });
      })
      .catch(err => {
        console.log("ERROR", err);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Women's World Cup</h1>
        </header>
        <DarkMode />
        <PlayerCard data={this.state.data} />
      </div>
    );
  }
}

export default App;
