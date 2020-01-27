
import React from 'react';
import { useDarkMode } from '../hooks/DarkMode';

import '../index.css'

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  }

  return (
      <>
      <div className="dark-mode__toggle">
        
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
          data-testid="darkToggleButton"

        />
        <h4>dark mode</h4>
      </div>
      <h2 className="title">Soccer Cards</h2>
      </>
  )
}

export default Navbar;