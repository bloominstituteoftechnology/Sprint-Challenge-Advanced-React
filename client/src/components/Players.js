import React from "react";

const Players = props => {
  console.log("players props: ", props);
  return (
    <div>
      <h2>{props.player.name}</h2>
      <h2>{props.player.country}</h2>
    </div>
  );
};

export default Players;
