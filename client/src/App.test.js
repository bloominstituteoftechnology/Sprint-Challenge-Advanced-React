import React from 'react';
import ReactDOM from 'react-dom';
import App, {dataCount} from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('contains all the data', () => {
  expect(dataCount).toBe(101)
})
