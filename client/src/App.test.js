import React from 'react';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import App from './App';
import Header from './components/Header';
import { PlayersList } from './components/PlayersList';





test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('renders title on Header component', () =>{
  const { getByText } = render(<Header/>) 
  const title = getByText('Players List');
  expect(title).toBeInTheDocument();

});

// test("Display players' count when button is clicked", async () => {
//   const { getByText } = render(<PlayersCount />);
//   const count = getByText(/0/i);
//   const button = getByText(/Fetch players/i);
//   fireEvent.click(button);
//   expect(count).toHaveTextContent("101"); 
//   expect(count).not.toHaveTextContent("0");
// });