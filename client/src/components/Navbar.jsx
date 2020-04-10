import React, { useState } from 'react';
import { useDarkMode } from "./hooks/useDarkMode";

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar" data-testid = "navbar">
      <h1>Player Trends</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
          data-testid = 'darkbttn'
        />

        
      </div>
    </nav>
  );
};

export default Navbar;