import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from '@testing-library/react';
import Form from './Form';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('component is rendering', () => {
  render(<App />);
});

test('App', () => {
  const { getByTestId } = render(<App />);

  getByTestId('App');

})

test('Check for Cards', () => {
  const { getByTestId } = render(<App />);

  getByTestId('returned-cards');

})

test('Check for Title', () => {
  const { getByTestId } = render(<App />);

  getByTestId('title');
})