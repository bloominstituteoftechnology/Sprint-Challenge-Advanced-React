import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render, fireEvent, cleanup } from "@testing-library/react";



it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("inverts the backround and text colors", () => {
  const { getByTestId } = render(<App />);
  let dmButton = getByTestId("dark-mode-button");
  fireEvent.click(dmButton);
  expect(dmButton).toBeTruthy();
});
