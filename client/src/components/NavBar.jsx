import React from 'react';
import { useDarkMode } from '../hooks/hooks.jsx';

const Navbar = () => {
    const [darkModeNew, setDarkModeNew] = useDarkMode(true)
    console.log(darkModeNew)
  
    return (
      <nav className="navbar">
        <h1>Women's World Cup players</h1>
        <div className="dark-mode__toggle">
         <div data-testid="darkmode-toggle"
            onClick={setDarkModeNew}
            className={darkModeNew ? 'toggle toggled' : 'toggle'}
          />
        </div>
      </nav>
    );
  };

export default Navbar;