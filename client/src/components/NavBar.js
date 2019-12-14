import React from 'react';
import useDarkMode from './useDarkMode';
import './Darkmode.css';

const NavBar = () => {
    const [darkMode, setDarkMode] = useDarkMode('DarkMode', false);

    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };

    console.log(darkMode);

    return (
      <div className="nav-bar">
        <h1>Women's World Cup Players</h1>
        
        <div className="button-container">
          <button className="darkmode-button" onClick={toggleMode}>Dark Mode</button>
        </div>
      </div>
    );
}
export default NavBar;