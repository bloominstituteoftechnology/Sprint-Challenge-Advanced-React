import React, { Component } from "react";
export default class Player extends Component {
  render() {
    return (
      <div className="player">
        <h2>Player Name: {this.props.girls.name}</h2>
        <p>Home Location: {this.props.girls.country}</p>
        <p>Google Searches: {this.props.girls.searches}</p>
      </div>
    );
  }
}
