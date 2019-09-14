import React, { Component } from "react";
import { useFetch } from "../hooks/hooks";
import Players from "./Players";

class FectchData extends Component {
  state = {
    data: []
  };

  componentDidMount() {
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
      <>
        {this.state.data.map(player => {
          return <Players key={player.id} player={player} />;
        })}
      </>
    );
  }
}

export default FectchData;
