import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as rtl from 'react-testing-library'
import 'jest-dom/extend-expect'
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import PlayerSearchForm from './components/PlayerSearchForm'
import FilteredSearchResults from './components/FilteredSearchResults'
import PlayerCardContent from './components/PlayerCardContent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('renders search form', () => {
  render(<PlayerCardContent/>);
})

test('renders filtered list ', () => {
  render(<FilteredSearchResults/>);
})

test('renders filtered list ', () => {
  render(<PlayerSearchForm/>);
})

test('renders placeholder text'), () => {
  const {getByPlaceHolderText} = render(<PlayerSearchForm/>)
  
}


