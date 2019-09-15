import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

export default function Nav() {
  const [darkMode, setDarkMode] = useDarkMode(false);

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <div className='navbar'>
      <h1>Google Trends: Women's World Cup Players</h1>
      <button onClick={toggleMode}>Dark Mode: {darkMode ? 'On' : 'Off'}</button>
    </div>
  );
}