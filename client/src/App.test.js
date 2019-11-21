// import React from 'react';
// import * as rtl from 'react-testing-library';
// import 'jest-dom/extend-expect';
// import App from './App';

// describe('App', () => {
// it('Renders when app doesnt crash', () => {
//  const wrapper = rtl.render(<App />);
//  const h1 = wrapper.getByText(/help/i);
// expect(h1) .toBeInTheDocument();

// });
// });
import React from 'react';
import * as rtl from '@testing-library/react';
import App from './App';
describe ('App', () => {
test ('mounts to a kind of simulated DOM', () => {
const simulatedDOM = rtl.render(<App />);
console.log(simulatedDOM.debug());
});  
});