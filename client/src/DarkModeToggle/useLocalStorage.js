import { useState } from 'react';

const useLocalStorage = () => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  const setValue = value => {
    setStoresValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  return [storesValue, setValue];
}

export default useLocalStorage;


