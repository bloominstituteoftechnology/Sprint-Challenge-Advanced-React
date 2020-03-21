import React from 'react';
import ReactDOM from 'react-dom';
import * as rt1 from '@testing-library/react'
import { render } from '@testing-library/react';
import App from './App';
import NavBar from './components/NavBar';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});



test('renders without crashing', () => {
  rt1.render(<App />);
});



// test("displays toggle function", () => {
//   const { getByText } = render(<App />);
//   getByTestId("toggle");
// });

test("renders nav", async () => {
  // Arrange
  const { getByText } = render(<NavBar />);
  // Act
  const darkM = getByText(/Women's World Cup Players Trend/i);
  // Assert
  expect(darkM).toBeInTheDocument();
});

