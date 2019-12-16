import React from 'react';
import * as rt1 from '@testing-library/react'
import App from './App';

afterEach(rt1.cleanup);

test('renders without crashing', () => {
rt1.render(<App />);
});



test('Title displayed', () => {
const {getByTestId} = rt1.render(<App />);
getByTestId(/title/i)
})

test("displays toggle function", () => {
  const { getByTestId } = rt1.render(<App />);
  getByTestId("toggle");
});