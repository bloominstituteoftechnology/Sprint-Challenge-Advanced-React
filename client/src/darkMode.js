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
      <div className="dark-mode__toggle">
        <button
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        >darkness</button>
      </div>
    </nav>
  );
};

export default Navbar;