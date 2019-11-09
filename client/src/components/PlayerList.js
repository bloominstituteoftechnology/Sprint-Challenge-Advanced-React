import React from "react";
import Player from "./Player";

const PlayerList = props => {
  return (
    <div className="playerList">
      {props.list.map(person => {
        return (
            <Player key={person.id} name={person.name} country={person.country}  />
        //   <SearchForm list={props.list} />
        );
      })}
    </div>
  );
};

export default PlayerList;