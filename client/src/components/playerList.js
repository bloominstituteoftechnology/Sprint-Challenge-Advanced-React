import React from "react";
import Player from "./Player";

class PlayerList extends React.Component {
  render(props) {
    return (
      <div className="playerList">
        {this.props.data.map(person => {
          return (
            <Player
              key={person.name}
              name={person.name}
              country={person.country}
            />
          );
        })}
      </div>
    );
  }
}

export default PlayerList;
