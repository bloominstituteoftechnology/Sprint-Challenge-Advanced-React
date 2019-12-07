import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  //this is the "hook" function
  const [storedValue, setStoredValue] = useState(() => {
    //as ternary
    // const item = window.localStorage.getItem(key);
    // return item ? JSON.parse(item) : initialValue;

    if (window.localStorage.getItem(key)) {
      return JSON.parse(window.localStorage.getItem(key));
    }
    window.localStorage.setItem(key, JSON.stringify(initialValue));
    return initialValue;
  });

  const setValue = value => {
    //this is the "setter" function inside the hook
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
