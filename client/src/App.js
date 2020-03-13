import React from 'react';
import Players from './Components/Players';
import './App.css';
import DarkMode from './Components/DarkMode'

import styled from 'styled-components';

const Page = styled.div`

margin-top: -45px;
padding-top: 40px;
`;

const All = styled.div`
  display:flex;
  flex-wrap: wrap;
  padding: 10px;
`;

const H1 = styled.h1`
  font-size: 5rem;
  margin-top: 3rem:
 
`;



function App() {
  return (
    
    <Page className="App"> 
        <H1> Most Searched Players</H1> 
       <DarkMode/>
        <All>
          <Players/>
        </All>
    </Page>
  );
}

export default App;