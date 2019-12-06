import React from 'react';
import Players from './Components/Players';
import './App.css';
import Nav from './Components/Nav'

import styled from 'styled-components';

const All = styled.div`
  display:flex;
  flex-wrap: wrap;
  padding: 10px;
  border: 3px black;
`;

const H1 = styled.h1`
  font-size: 4rem;
`;


function App() {
  return (
    
    <div className="App"> 
        <H1> Women's World Cup</H1> 
      
        <All>
          <Players/>
        </All>
      
       
    </div>
  );
}

export default App;
