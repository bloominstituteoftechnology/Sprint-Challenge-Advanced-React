import {useDarkMode} from './hooks/useDarkMode';
import React from 'react';

const NavBar = () => {
  //const [darkMode, setDarkMode] = useState(false);
  const [darkMode, setDarkMode] = useDarkMode('dark-mode', false)
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
    console.log(darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Players</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default NavBar;