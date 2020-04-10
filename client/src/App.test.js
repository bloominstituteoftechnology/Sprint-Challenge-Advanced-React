import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import App from './App';
import Players from './components/Players';
import NavBar from './components/NavBar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

afterEach(cleanup);

test('renders without crashing', () => {
  render(<App />);
});

test('Shows Title', () => {

  const { getByText } = render(<NavBar/>);

getByText(/Players/i);


});


test('Shows Name', () => {
const p = document.createElement("p")
ReactDOM.render(<Players/>, p)
ReactDOM.unmountComponentAtNode(p)
});
//   expect (testForName).toBeInTheDocument();



// test('Shows Searches', () => {

//   const { getByText } = render(<App/>);

//   const testForName = getByText(/searches/i);
//   expect (testForName).toBeInTheDocument();

// });

// test('Title displayed', () => {
//   const { getByTestId } = rt1.render(<App />);
//   getByTestId(/title/i)
// })

// test("displays toggle function", () => {
//   const { getByTestId } = rt1.render(<App />);
//   getByTestId("toggle");
// });


