import React from 'react';
import useDarkMode from "../hooks/useDarkMode.js";
import {Button} from 'semantic-ui-react';

const ButtonToggle = () => (
    <Button.Group>
      <Button>Light</Button>
      <Button.Or />
      <Button positive>Dark</Button>
    </Button.Group>
  )

const ToggleBar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <div className="dark-mode__toggle">
        <button onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'} >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
};

export default ToggleBar;