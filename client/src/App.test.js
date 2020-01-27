import React from 'react';
import * as rtl from '@testing-library/react'
import { render, fireEvent } from '@testing-library/react'

import NavBar from './components/NavBar';

test('NavBar renders without crashing', () => {
  const { getByText } = render(<NavBar />)
  getByText("Soccer Cards")
})

test('clicking the toggle button actually changes class to dark mode', () => {
  const { getByTestId } = rtl.render(<NavBar />)
  const darkToggleButton = getByTestId('darkToggleButton')
  expect(darkToggleButton.classList.contains('toggled')).toBe(false)
  fireEvent.click(darkToggleButton)
  expect(darkToggleButton.classList.contains('toggled')).toBe(true)
})
