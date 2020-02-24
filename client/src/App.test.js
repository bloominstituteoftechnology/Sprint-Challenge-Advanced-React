import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react'
import App from './App'

import '@testing-library/jest-dom';

test('App renders without crashing', () => {
  render(<App />);
});

test('Header shows up', () => {
  const {getByText} = render(<App />);
 
   const header = getByText(/Player searches/);
 
   expect(header).toBeInTheDocument()
 
 }) 



// test('Name column title rendered', () => {

//     const { getByText } = render(<App/>);
  
//     getByText(/name/i);
  
//   });

  // test('Header', () => {
  //   const { getByText } = render(<App />);
  //   const header = getByText(/Top Womens World Cup Players/i);
  //   // expect(header).toBeInTheDocument();
  // })

// it('renders without crashing', () => {render(<App/>)

// });



// test('Name column title rendered', () => {

//     const { getByText } = render(<App/>);
  
//     getByText(/name/i);
  
//   });

// test('should have text [player name]',  async ()=>{
//     const {findByText} = await render(<PlayersCard />)
//     findByText(/alex morgan/i);
// }) 

// 
