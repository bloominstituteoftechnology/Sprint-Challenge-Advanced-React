import React from 'react';
import { render, cleanup,toHaveTextContent} from "@testing-library/react";
import Button from '../Components/Button';
import renderer from 'react-test-renderer';


afterEach(cleanup)
it ('renders button correctly',() => {
    const{getByTestId} = render(<Button label='Dark Mode'/>);
    expect (getByTestId("button"))})


// it ('renders button correctly',() => {
//     const{getByTestId} = render(<Button label='save'/>);
//     expect (getByTestId("button")).toHaveTextContent('save');
// })


it('matches snapshot', ()=> {
   const tree = renderer.create(<Button label = 'save'></Button>).toJSON();
   expect(tree).toMatchSnapshot();
})