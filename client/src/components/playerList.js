import React from "react";

function playerList(props) {
    return (
      <div>
      {
        props.player.map((players) => (
          <div>
            <h1>{players.name}</h1>
          </div>
      ))};
    </div>
)};

export default playerList




  