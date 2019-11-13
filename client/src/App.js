import React from 'react';
import './App.css';
import './index.css';
import Nav from './Components/Nav';
import Team from './Components/Team';
import Button from './Components/Button'

function App() {
 return (
   <div className='App'>
   <div>
   </div>
    
     <Nav />
     <Button label ='Dark Mode'/>
     <Team />
   </div>
 );
}
export default App;