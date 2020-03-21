import React, { useState } from 'react';
import useDarkMode from './useDarkMode';


const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode("key",false);
  const [mode,setMode] = useState('light')
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
    darkMode ? setMode("dark") : setMode('light')
  };
  return (
    <nav className="navbar">
      <h1>{mode} mode</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}></div>

      </div>
    </nav>
  );
};

export default Navbar;