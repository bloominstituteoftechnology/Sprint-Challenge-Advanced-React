import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("Does Name show on screen", ()=> {
  const { getAllByText }  = render(<App />);

  getAllByText(/name/i);
})

test("Does from show on screen", ()=> {
  const { getAllByText }  = render(<App />);
  
  getAllByText(/from/i);
})