import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render, fireEvent } from "@testing-library/react";
import DarkMode from "./DarkMode";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("displays container", () => {
  const { getByTestId } = render(<App />);
  getByTestId(/app/i);
});

test("displays navi", () => {
  const { getByTestId } = render(<DarkMode />);
  getByTestId(/navi/i);
});

test("displays toggler", () => {
  const { getByTestId } = render(<DarkMode />);
  getByTestId(/toggler/i);
});

test("toggler click", () => {
  const { getByTestId } = render(<DarkMode />);
  const toggle = getByTestId(/toggler/i);

  fireEvent.click(toggle);
});