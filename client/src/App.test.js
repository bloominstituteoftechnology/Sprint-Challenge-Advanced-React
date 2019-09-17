import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Player from './Components/Player';
import NavBar from './Components/NavBar';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("renders without crashing", () => {
  //Arrange, Act, Assert
  render(<Player />);
});

test("verify home touchdown is present", () => {
  // Arrange
  const { getByTestId } = render(<NavBar />);

  // Act
  getByTestId(/dark-mode/i);
  //Assert
});

