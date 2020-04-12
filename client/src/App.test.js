import React from 'react';
import ReactDOM from 'react-dom';
import { render,  fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

test('App title and header is appearing ', () => {
  // Arrange
  const {getByText} = render(<App/>)
  // Act
// nothing to do here
  //Assert
  const title = getByText(/Women's World Cup Players/i);
  expect(title).toBeVisible();

  const header = getByText(/Ranked according to popularity/i);
  expect(header).toBeVisible();
});

test('card shows up', async () => {
  //Arange
  const {findByText} = render(<App/>)
  const card = await findByText(/Alex Morgan/i)

  expect(card).toBeInTheDocument()

})


test('toggle click changes the background', () => {
  //Arrange
  const {getByTestId} = render(<App/>)
  // const rainbowTrue =  
  //Act
fireEvent.click(getByTestId(/button/i))
const button = getByTestId(/button/i)
//Assert
expect(button).toHaveClass("toggled")
// expect(getByTestId('body').toHaveStyle('background: linear-gradient(124deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3)'))
})

