import React, { Component } from "react";
import { useFetch } from "../hooks/hooks";
import Players from "./Players";
import PlayerForm from "./PlayerForm";

class FectchData extends Component {
  state = {
    data: []
  };

  addNewPlayer = (player, country) => {
    const newPlayer = {
      name: player,
      country: country,
      searches: Math.round(Math.random() * (1000 - 1) + 1),
      id: Date.now()
    };
    this.setState({
      data: [newPlayer, ...this.state.data]
    });
  };

  componentDidMount() {
    // getAPI("http://localhost:5000/api/players");
    fetch("http://localhost:5000/api/players")
      .then(res => res.json())
      .then(player => {
        this.setState({ data: player });
        console.log("fetch player: ", player);
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="player-container">
        <PlayerForm addNewPlayer={this.addNewPlayer} />
        {this.state.data.map(player => {
          return <Players key={player.id} player={player} />;
        })}
      </div>
    );
  }
}

export default FectchData;
