import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NavBar from './Components/NavBar.js';
import { render } from '@testing-library/react';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);

});

test("ball is rendering", () => {
  const container = render(<App />);
  const ball = container.getByText('Ball');
})