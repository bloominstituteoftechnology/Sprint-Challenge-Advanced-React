import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NavBar from './NavBar';

describe('<NavBar />', () => {
  test('should render without crashing', () => {
    render(<NavBar />);
  });
  test('should have the toggle button for dark mode', () => {
    const { getByTestId } = render(<NavBar />);
    expect(getByTestId('dark-mode-toggle')).toBeInTheDocument();
  });
  test(
    `Should have the header Women's Soccer Players Searches from the world cup`
  );
});
