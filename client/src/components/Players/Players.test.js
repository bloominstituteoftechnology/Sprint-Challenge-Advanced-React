import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Players from './Players';

describe('<Players />', () => {
  test('should render without crashing', () => {
    render(<Players />);
  });
  xtest('should display the Player Chart Component', () => {
    const { getByTestId } = render(<Players />);
    expect(getByTestId('players-chart')).toBeInTheDocument();
  });
});
