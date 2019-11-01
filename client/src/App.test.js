import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'jes-dom/extend-expect';
import {getByLabelText,
  getByText,
  getByTestId,
  queryByTestId} from '@testing-library/jest-dom/extend-expect'
import PlayerCard from './components/PlayerCard';
import expectExport from 'expect';





test('it should be red when true', () => {
  const div = rtl.render(
    <App/>
  );
 const element = div.getByText(/Red/i);
 expect(element).toBeInTheDocument();
});
