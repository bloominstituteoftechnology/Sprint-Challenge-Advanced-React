import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as rtl from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import Player from "./components/PlayerCard";
import Navbar from "./components/Navbar";

afterEach(rtl.cleanup);

describe('App renders without crashing', () => {
  test("Does App render?", () => {
    rtl.render(<App />)
  })
})

it('renders Player', () => {
  const div=document.createElement('div');
  ReactDOM.render(<Player />, div);
  ReactDOM.unmountComponentAtNode(div);
})