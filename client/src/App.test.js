import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as rtl from '@testing-library/react';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});




test('if dark mode button renders Dark Mode Enabled', () => {
  const app = rtl.render(<App />);
  const darkModeBtn = app.getByTestId(/darkModeBtn/i);
  const darkModeEnabler = app.getByTestId(/dmEnabler/i);

  rtl.fireEvent.click(darkModeBtn)
  expect(darkModeEnabler.textContent).toBe('Dark Mode Not Enabled')
})