import React, { useState } from 'react';
import { useDarkMode } from "./Hooks/useDarkMode";

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Players</h1>
      <div className="dark-mode__toggle">
        <button data-testid="submit"
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}>
         darkness </button>
      </div>
    </nav>
  );
};
export default Navbar;