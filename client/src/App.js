import React from "react";
import axios from "axios";
import Card from "./Card";
import Nav from "./Nav";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      players: []
    };
  }

  fetchPlayers = () => {
    axios
      .get("http://localhost:5000/api/players")
      .then(result => {
        this.setState({ players: result.data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.fetchPlayers();
  }

  render() {
    return (
      <div>
        <Nav />
        <h1>Our Cards</h1>
        <div className="cardsDiv">
          {this.state.players.map((player, index) => (
            <Card
              key={index}
              name={player.name}
              country={player.country}
              searches={player.searches}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
