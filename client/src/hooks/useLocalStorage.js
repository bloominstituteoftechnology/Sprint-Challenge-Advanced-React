// it can be used just like useState, but it will persist data to localStorage
import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
  // define some state --> will receive an initial value to set up our localStorage property
  const item = JSON.parse(localStorage.getItem(key));

  const [storedValue, setStoredValue] = useState(item || initialValue);

  // define a setter function that set's a value to localStorage when called, also set our state property to the new value
  const setValue = value => {
    localStorage.setItem(key, JSON.stringify(value));
    setStoredValue(value);
  };

  return [storedValue, setValue];
};