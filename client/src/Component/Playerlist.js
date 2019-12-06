import React, { Component } from "react";
import axios from "axios";
import Players from "./Players";

export default class PlayersList extends Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }
  componentDidMount() {
    axios
      .get(`http://localhost:5000/api/players`)
      .then(response => {
        console.log("Soccer Players Succesfully Compiled", response);
        this.setState({ players: response.data });
      })
      .catch(error => {
        console.log("Failed to Compile", error);
      });
  }
  render() {
    return (
      <div>
        {this.state.players.map((girls, index) => {
          return <Players key={index} girls={girls} />;
        })}
      </div>
    );
  }
}
