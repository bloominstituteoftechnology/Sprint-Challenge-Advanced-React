import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    // setting "grab key parameter from local storage" to a variable
    const item = window.localStorage.getItem(key);
    // check if local storage has item, if it does, set initial state to item, if it doesnt, set initial state to initial value
    return item ? JSON.parse(item) : initialValue;
  });

  console.log({ key, storedValue });

  // setting state and local storage "key" to "value" parameter
  const setValue = (value) => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
