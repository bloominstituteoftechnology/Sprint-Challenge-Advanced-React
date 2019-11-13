import React from 'react';
import { render } from "@testing-library/react";
import Button from '../Components/Button';

it ('renders button correctly',() => {
    const{getByTestId} = render(<Button label='Dark Mode'/>);
    expect (getByTestId("button"))})