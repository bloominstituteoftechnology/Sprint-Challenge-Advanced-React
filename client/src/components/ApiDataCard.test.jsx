import React from "react";
import ReactDOM from "react-dom";
import ApiDataCard from "./ApiDataCard";

it("renders without crashing", () => {
  const testPlayer = {
    name: "Player 1",
    country: "Country-for-Player-1",
    id: 999,
    searches: 40
  };
  ReactDOM.render(<ApiDataCard user={testPlayer} key={testPlayer.id} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
