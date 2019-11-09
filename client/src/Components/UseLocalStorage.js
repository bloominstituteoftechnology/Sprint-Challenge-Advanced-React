import { useState } from "react";


export const useLocalStorage = key => {
  const [storedValue, setStoredValue] = useState(() => {
  const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : key;
  });

  const setValue = value => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  return [storedValue, setValue];
};