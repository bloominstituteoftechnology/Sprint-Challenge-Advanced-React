import React from 'react';
import ReactDOM from 'react-dom';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App.js';

afterEach(rtl.cleanup);

it('renders without crashing', () => {
  const div = docment.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('loads dark mode button', () => {
  const app = ReactDOM.render(<App />);
  const element = app.getByTitle('dark-mode-btn');
  expect(element).toBeVisible();
});