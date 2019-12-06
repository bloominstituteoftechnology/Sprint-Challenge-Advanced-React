import React from 'react';
import Players from './Components/Players';
import './App.css';
import Nav from './Components/Nav'

import styled from 'styled-components';

const player = styled.div`
  display:flex;
  flex-wrap: wrap;
  padding: 10px;
  border: 3px black;
`;


function App() {
  return (
    
    <div className="App"> 
        <h1> Women's World Cup</h1> 
      
        <Players/>
      
       
    </div>
  );
}

export default App;
