import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const entry = window.localStorage.getItem(key);
    return entry ? JSON.parse(entry) : initialValue.players;
  });

  const setValue = value => {
    console.log(value); // logs true or false
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  return [storedValue, setValue];
};

export default useLocalStorage;

