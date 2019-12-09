import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const entry = window.localStorage.getItem(key);
    return entry ? JSON.parse(entry).players : initialValue.players;
  });

  const setValue = value => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify({ "players": value }));
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
