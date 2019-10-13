import React from 'react';
import { useDarkMode } from './useDarkMode';
import { Button } from 'semantic-ui-react';
//adding a navigation header with dark mode and local storage custom hooks imported
const Navigation = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const changeMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="nav">
      
      <h1>Women's Soccer League Trends</h1>
      
      {/* //button for dark mode
      <div className="change-mode">
      <Button class="ui toggle button" onClick={changeMode} className={darkMode ? 'toggle toggled' : 'toggle'}>Dark Mode</Button>
      </div>*/}
      <br />
      <div class="ui toggle checkbox">
      <input type="checkbox" onClick={changeMode} className={darkMode ? 'toggle toggled' : 'toggle'}></input>
      <label>Dark Mode </label>
      </div>
    </nav>
  );
};

export default Navigation;