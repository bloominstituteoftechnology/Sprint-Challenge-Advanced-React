import React from 'react';
import ReactDom from 'react-dom';
import Button from '../Components/Button';

it ('renders button correctly',() => {
    const{getByTestId} = render(<Button label='Dark Mode'/>);
    expect (getByTestId("button"))})