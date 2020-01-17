import React, { useState } from 'react';
import {useDarkMode} from '../hooks/useDarkMode';

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode('dark-mode', false)
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <nav className="navbar">
      <h1>Most Searched Players During the Women's World Cup 2019</h1>
      <div className="dark-mode__toggle">
      {/* <h5>Representing </h5> */}
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
