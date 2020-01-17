import React from "react";
import Players from "./Players";

class PlayersList extends React.Component {
  render(props) {
    return (
      <div className="playersList">
        {this.props.data.map(person => {
          return (
            <Players
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

export default PlayersList;