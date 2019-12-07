import React from 'react';
import Players from './Components/Players';
import './App.css';
import world from './Components/world.png';
import Nav from './Components/Nav'

import styled from 'styled-components';

const Page = styled.div`
background: mediumseagreen;
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

const Image = styled.img`
  margin-top: 3rem;
  width: 350px
  height: 200px;
`;


function App() {
  return (
    
    <Page className="App"> 
        <Image src={world} alt= '2019 World Cup Image' />
        <H1> Most Searched Players</H1> 
       <Nav/>
        <All>
          <Players/>
        </All>
    </Page>
  );
}

export default App;
