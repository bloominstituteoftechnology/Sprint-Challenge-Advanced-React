import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';
import soccerball  from "../soccerball.jpg"
console.log (soccerball)

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Women's World Cup</h1> 
        <img src={soccerball} alt="ball"/>
        

      
      <div className="dark-mode__toggle">
       <div
            onClick={toggleMode}
            className= {darkMode ? 'toggle toggled' : 'toggle'}
        />
       </div>
      </nav>
  );
};

export default Navbar;