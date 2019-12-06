import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("my app loads", () => {
  const { getByText } = render(<App />);
  getByText(/women/i);
});

test("toggles the theme", () => {
  const { getByTestId } = render(<App />);
  const toggleBtn = getByTestId("toggle-theme-btn");
  fireEvent.click(toggleBtn);
  expect(getByTestId("header")).toHaveStyle("background-color: #313843");
  fireEvent.click(toggleBtn);
  expect(getByTestId("header")).toHaveStyle("background-color: white");
});

test("data loads", async () => {
  const { getByText } = render(<App />);

  const dataTextNode = await waitForElement(() => getByText(/Rose Lavelle/i));

  expect(dataTextNode).toHaveTextContent("Rose Lavelle");
});
