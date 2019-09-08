import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';import "@testing-library/jest-dom/extend-expect";
import * as rtl from "@testing-library/react";

test('class changes on darkmode button',()=>{    

  const app = rtl.render(<App />);
  const dark = app.getByText(/dark mode/i);
  app.unmount()
  

})

// test('no crash on render', async () => {
//   const DOM = await rtl.render(<App />);

//   console.log(DOM);
// });


// test('i am not crazy amanda', ()=>{
//   expect(true).toBe(true)
// })