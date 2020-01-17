import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {render} from "@testing-library/react";

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


test('is rendering data', ()=>{
  const container = render(<App />)

  container.getByText(/dude/i)
})

test('dark mode is toggling', ()=>{
  
})