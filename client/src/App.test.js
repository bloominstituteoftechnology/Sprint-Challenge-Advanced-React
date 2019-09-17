import React from "react";
import ReactDOM from "react-dom";
import * as rtl from "@testing-library/react";
import App from "./App";
import Players from "./components/Players";
import PlayerForm from "./components/PlayerForm";
import { fireEvent } from "@testing-library/react";

it("renders without crashing", () => {
  const app = rtl.render(<App />);
  console.log(app.debug());
});

it("renders players in app", () => {
  const app = rtl.render(<App />);
  app.getByText(/players/i);
  console.log(app.debug());
});

it("renders player input", () => {
  const playerInput = rtl.render(<PlayerForm />);
  playerInput.getByTestId(/player/i);
  console.log(playerInput.debug());
});

it("renders country input", () => {
  const playerInput = rtl.render(<PlayerForm />);
  playerInput.getByTestId(/country/i);
  console.log(playerInput.debug());
});
