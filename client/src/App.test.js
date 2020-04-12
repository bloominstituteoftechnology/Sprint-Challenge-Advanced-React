import React from 'react';
import { render, fireEvent, getByTestId, toBeInTheDocument } from "@testing-library/react";
import ReactDOM from 'react-dom';
import App from './App';
import Navbar from "./darkMode";

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
test("renders App without crashing", () => {
  render(<App />);
 });
 test("dark-mode", async () => {
  const { getByTestId } = render(<Navbar />);
  const submit = getByTestId(/submit/i);
  fireEvent.click(getByTestId(/submit/i));
})