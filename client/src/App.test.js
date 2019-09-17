import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { isMainThread } from 'worker_threads';



test('App renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

describe("Finding the product of two numbers", () => {
  it("Product of two numbers" , () => {
    expect(3*4).toEqual(12);
    expect(-5*2).toEqual(-10);
  })

})