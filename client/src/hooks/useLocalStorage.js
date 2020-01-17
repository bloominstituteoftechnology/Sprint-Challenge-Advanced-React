import {useState} from 'react';

export const useLocalStorage = (setDarkMode, key, something) => {
    const [storedValue, setStoredValue] = useState(() => {
      const things = localStorage.getItem(key);
      return things ? JSON.parse(things) : something;
    });
      const setValue = newValue => {
        setStoredValue(newValue);
        localStorage.setItem(key, JSON.stringify(setDarkMode));
    };
    return [storedValue, setValue];
};
export default useLocalStorage;