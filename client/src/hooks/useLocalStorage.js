import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
  if (typeof key !== 'string') {
    throw new Error('Invalid Params: useLocalStorage(key, initialvalue)');
  }
  const [storedValue, setStoredValue] = useState(() => {
    if (!window.localStorage) {
      throw new Error('Browser does not support local storage');
    } else if (localStorage.getItem(key)) {
      return JSON.parse(localStorage.getItem(key));
    } else {
      window.localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    }
  });
  const setValue = value => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
};
