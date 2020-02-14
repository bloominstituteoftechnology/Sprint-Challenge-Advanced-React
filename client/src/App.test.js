import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from './App';

 
test('renders header', () => {

  const { getByText } =render(<App />);

  const header = getByText(/soccer rocks/i);

  expect(header).toBeInTheDocument();
  expect(header).toBeTruthy();
  expect(header).not.toBeFalsy();
});


test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
