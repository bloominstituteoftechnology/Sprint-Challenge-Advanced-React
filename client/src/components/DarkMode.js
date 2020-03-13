import React from 'react';
import useDarkMode from '../Hook/useDarkMode';
import "../App.css";


const DarkMode = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = e => {
      e.preventDefault();
      setDarkMode(!darkMode);
    };
    return (
      <nav className="navbar" data-testid="navi">
        <div className="dark-mode__toggle">
          <div
          data-testid="toggler"
            onClick={toggleMode}
            className={darkMode ? "toggle toggled" : "toggle"}
          />
        </div>
      </nav>
    );
  };
  
  
export default DarkMode;