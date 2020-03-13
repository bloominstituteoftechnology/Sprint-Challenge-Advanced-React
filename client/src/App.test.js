import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from "@testing-library/react";
import Card from "./components/Card";
import '@testing-library/jest-dom/extend-expect';
import Navbar from "./components/Navbar"


it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
test("displays navigation", () => {
  const { getByTestId } = render(<Navbar />);
   getByTestId(/navi/i);
  
});
test("displays api", () => {
  const { getByTestId } = render(<Card />);
   getByTestId(/axios/i);

  
});