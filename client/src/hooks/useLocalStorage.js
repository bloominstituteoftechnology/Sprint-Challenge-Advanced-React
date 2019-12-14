import { useState } from "react";
// setting up our custom hoook
const useLocalStorage = (key, initialValue) => {
  // refactoring
  const [storedValue, setStoredValue] = useState(() => {
    // setting 'item' to local storage, then using getItem method to pass in a key
    const item = window.localStorage.getItem(key);
    // if the item is true use 'parse' method to set a new key/value pair, if not set it to be the initial value
    return item ? JSON.parse(item) : initialValue;
  });

  const setValue = value => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  // returning our state and function that sets state
  return [storedValue, setValue];
};

export default useLocalStorage;