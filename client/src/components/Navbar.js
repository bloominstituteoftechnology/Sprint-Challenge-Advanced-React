import React, { useState } from 'react';
import useDarkMode from "../hooks/useDarkMode.js";

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <button
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        >Darkmode</button>
  );
};

export default Navbar;
