import React from "react";
import ReactDOM from "react-dom";
import ApiDataCard from "./ApiDataCard";
import * as rtl from "react-testing-library";
import "jest-dom/extend-expect";

it("renders without crashing", () => {
  const testPlayer = {
    name: "Player 1",
    country: "Country-for-Player-1",
    id: 999,
    searches: 40
  };
  rtl.render(<ApiDataCard user={testPlayer} key={testPlayer.id} />, div);
});
