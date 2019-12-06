import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import Players from "./components/Players";
import Navbar from "./components/Navbar";

test("App renders without crashing", () => {
  const component = render(<App />);
  //console.log(component);
});

test("Players renders without crashing", () => {
  const component = render(<Players />);
});

test("Navbar renders without crashing", () => {
  const component = render(<Navbar />);
});

test("Is there a toggle?", () => {
  const { findAllByDisplayValue } = render(<App />);

  findAllByDisplayValue(/toggle/i);
});

test("text on screen", () => {
  const { getByText } = render(<App />);
  expect(getByText(/Number of Searches:/i));
});
