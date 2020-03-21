import { useState } from "react";

export function useLocalStorage(key, initialValue) {
  if (window.localStorage && window.localStorage.getItem(key)) {
    initialValue = JSON.parse(window.localStorage.getItem(key));
  }
  const [value, setStoredValue] = useState(initialValue);

  const setValue = value => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [value, setValue];
}
