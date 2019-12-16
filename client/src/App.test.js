import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render } from "@testing-library/react";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("Header is displayed", () => {
  const { getByTestId } = render(<App />);
  getByTestId(/header/i);
});

test("There is a search button", () => {
  const { getByTestId } = render(<App />);
  getByTestId(/searchButton/i);
});

test("search is found in search bar", () => {
  const { getByText } = render(<App />);
  getByText(/search/i);
});
