import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from '@testing-library/react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test(`it has "Women's World Cup" text`, () => {
  const container = render(<App />);
  container.getAllByText(/women's world cup/i);
});
test(`it has "Women's World Cup" text`, () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/women's World Cup players/i);
  expect(linkElement).toBeInTheDocument();
});
test("test nr of elements", ()=>{
  const { getAllByText } = render(<App />);
   const hitElements = getAllByText(/name/i);
   const expectedHitElm = 1
  expect(hitElements.length).toBe(expectedHitElm)
})