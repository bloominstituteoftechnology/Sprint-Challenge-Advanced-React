import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {render} from '@testing-library/react';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });



test('rendering world cup app', () => {
  render (<App/>);
  
})

test('players here', ()=> {
  const players = render (<App/>);
  players.getByTestId('Players');
})

test('image can be seen', () =>{
  const image = render (<App/>);
  image.getByTestId('world');
})
