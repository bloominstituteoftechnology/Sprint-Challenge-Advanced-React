import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "@testing-library/jest-dom/extend-expect";
import * as rtl from "@testing-library/react"

it("renders without crashing"), ()=>{
  const app = rtl.render(<App/>);
  console.log(app.debug());
}


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
