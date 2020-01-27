import React from 'react';
import ReactDOM from 'react-dom';
import * as rtl from "@testing-library/react"
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it( 'tests if the page contains the text' ,()=>{
  const expected=rtl.render(<App/>);
  expect(expected.getByText(/players/i))
});
