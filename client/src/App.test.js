import React from 'react';
import { render } from "@testing-library/react";
import App, { sum } from './App';


test("it returns the sum of two numbers", () => {
  expect(sum(2, 2)).toBe(4);
})


test('renders without crashing', () => {
  render(<App />);
});
