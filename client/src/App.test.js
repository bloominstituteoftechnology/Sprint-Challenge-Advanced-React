import React from "react";
import { render, fireEvent, getByText, screen, getByTestId} from '@testing-library/react';
import App from './App';

test('navbar contents are visible',()=>{
    const { getByTestId } = render(<App/>)
    const navbar = getByTestId('navbar')
    const darkbttn = getByTestId('darkbttn')
    expect(navbar).toBeVisible();
    expect(darkbttn).toBeVisible();
})
test('PlayerList is visible', ()=>{
  const { getByText, getByTestId } = render(<App/>)
  await wait(() => expect(queryByTestId('playerlist')).toBeTruthy())
  
})