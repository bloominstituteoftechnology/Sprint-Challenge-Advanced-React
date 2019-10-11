
import React from 'react';
import useDarkMode from '../components/hooks/useDarkMode.js'

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <div className="dark-mode__toggle">
        <div
        data-testid='darkmode'
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>

    </nav>
  );
};
export default Navbar;