import React from "react";
import { render, fireEvent, getByTestId, getByText, screen} from '@testing-library/react';
import Navbar from './Navbar';

test('navbar contents are visible',()=>{
    const { getByText, getByTestId } = render(<Navbar/>)
    const navbar = getByTestId('navbar')
    const darkbttn = getByTestId('darkbttn')
    expect(navbar).toBeVisible();
    expect(darkbttn).toBeVisible();
})