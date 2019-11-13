import React from "react";
import App from "./App";
import { render } from "@testing-library/react";


describe("renders without crashing", () => {
  it('shows a welcome message', () => {

    const { getByText } = render(<App />);
    getByText("Women's World Cup!");
  });
});