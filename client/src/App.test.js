import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Players from './components/Players';

it("renders without failure", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
