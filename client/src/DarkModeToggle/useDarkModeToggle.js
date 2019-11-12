import React, { useState } from 'react';
import useLocalStorage from './useLocalStorage.js';

const useDarkModeToggle = (key, initialValue) => {
  const [value, setValue] = useLocalStorage(key, initialValue);
  const handleChanges = updatedValue => {
    setValue(updatedValue);
  }

  return [value, setValue, handelChanges]
};


  return (
    <div>
      <h3>Toggle to Dark Mode</h3>
      <button 
        onClick = {toggleMode}
        className = {darkMode ? 'toggle toggled' : 'toggle'}
      >Toggle Here!
      </button>
    </div>
  );

export default useDarkModeToggle;