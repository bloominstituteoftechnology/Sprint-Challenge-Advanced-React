import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import toggleMode from './NavBar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders mode', () => {
  const { getByText } = render(<App/>);
  const mode = getByText(/mode/i)
  expect(mode).toBeInDocument();
})