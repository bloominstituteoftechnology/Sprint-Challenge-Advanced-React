import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from "@testing-library/react";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("Displayed Header Component", () =>{
  const { getByTestId } = render(<App />);
  getByTestId(/header/i);
});

test("Search Button is there", ()=>{
  const { getByTestId } = render (<App />);
  getByTestId(/searchButton/i);
});

test("Search was found in the search bar", () =>{
  const { getByText } = render(<App />);
  getByText(/search/i);
});
