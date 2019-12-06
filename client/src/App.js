import React from 'react';
import Players from './Components/Players';
import './App.css';
import Nav from './Components/Nav'

import styled from 'styled-components';

const head = styled.p`
  font-size: 4rem;
`;


function App() {
  return (
    
    <div className="App"> 
        <h1> Women's World Cup</h1> 
        <Nav/>
        <Players/>
    </div>
  );
}

export default App;
