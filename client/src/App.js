import React from "react";
import axios from "axios";
import "./App.css";
import Players from "./components/Players";
import Navbar from "./components/Navbar";

class App extends React.Component {
  state = {
    players: []
  };

  componentDidMount() {
    axios.get("http://localhost:5000/api/players").then(response => {
      console.log(response.data, "players data");
      this.setState({ players: response.data });
    }, []);
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <h1>2019 Womens World Cup Players</h1>
        <h2>ordered by search popularity</h2>
        <Players players={this.state.players} />
      </div>
    );
  }
}

export default App;
