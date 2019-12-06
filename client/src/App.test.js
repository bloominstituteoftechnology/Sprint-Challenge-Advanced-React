import React from 'react';
import { render } from "@testing-library/react";
import App from './App';
import "@testing-library/jest-dom/extend-expect";


test("renders without crashing", () => {
  render(<App />);
});

test("displays toggle function", () => {
  const { getByTestId } = render(<App />);
  console.log(getByTestId("toggle"));
  getByTestId("toggle");
}); 
