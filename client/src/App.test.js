import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PlayerList from './components/PlayerList';
import Header from './components/Header';

afterEach(rtl.cleanup);

//testing
it('renders correctly. truthy, in document, visible', () => {
  const wrapper = rtl.render(
    <PlayerList />
  );
  const element = wrapper.queryByText(/players/i);
  expect(element).toBeTruthy();
  expect(element).toBeInTheDocument();
  expect(element).toBeVisible();

//comment
  wrapper.debug();
});

it('renders correctly. truthy, in document, visible', () => {
  const wrapper = rtl.render(
    <Header />
  );
  const element = wrapper.queryByText(/Toggle Theme/i);
  expect(element).toBeTruthy();
  expect(element).toBeInTheDocument();
  expect(element).toBeVisible();
  
//comment
  wrapper.debug();
});