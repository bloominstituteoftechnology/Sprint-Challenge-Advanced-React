import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import Navbar from "./components/Navbar";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

it("renders without crashing", () => {
  const wrapper = rtl.render(<App />);
  console.log(wrapper.debug());
});
test("renders without crashing", () => {
  render(<App />);
});

test("renders players text without crashing", () => {
  const Navtext = render(<Navbar />);

  Navtext.getByText("Players");
});

test("renders the placeholder txt country without crashing", () => {
  const country = render(<App />);

  country.findByPlaceholderText("country");
});

test("renders the placeholder txt name without crashing", () => {
  const name = render(<App />);

  name.findByPlaceholderText("name");
});

test("renders the placeholder txt country without crashing", () => {
  const country = render(<App />);

  country.findByPlaceholderText("country");
});
