import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom/extend-expect";

test("renders without crashing", () => {
  render(<App />);
});

test("displays toggle function", () => {
  const { getByTestId } = render(<App />);

  console.log(getByTestId("toggle"));

  getByTestId("toggle");

  //datatestid="reactTest"

  //const {getByTestId} = render(<App />)
  //getByTestId('reactTest');
});

test("displays a players list", () => {
  const { getByTestId } = render(<App />);

  console.log(getByTestId("playerList"));

  getByTestId("playerList");

  //datatestid="reactTest"

  //const {getByTestId} = render(<App />)
  //getByTestId('reactTest');
});
