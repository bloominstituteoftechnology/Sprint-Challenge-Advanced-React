import { useState } from 'react';

export const useDark = def => {
    const [value, setValue] = useState(window.localStorage.getItem("dark") || def);
  
    const setStateAndLocalStorage = newValue => {
      setValue(newValue);
      window.localStorage.setItem("dark", newValue);
    };
  
    return [value, setStateAndLocalStorage];
  };
  