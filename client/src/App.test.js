import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import App from "./App";
import '@testing-library/jest-dom/extend-expect';

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("inverts the backround and text colors", () => {
  const { getByTestId } = render(<App />);
  let dmButton = getByTestId("dark-mode-button");
  fireEvent.click(dmButton);
  expect(darkmode).toBeTruthy();
});
