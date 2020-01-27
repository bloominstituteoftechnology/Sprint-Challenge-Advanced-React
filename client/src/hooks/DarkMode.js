import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (initialDarkMode) => {
  const [storedDarkMode, setStoredDarkMode] = useLocalStorage('darkmode', initialDarkMode);

  useEffect(() => {
    const body = document.body;
    if (storedDarkMode) {
        body.classList.add("dark-mode");
    } else {
        body.classList.remove("dark-mode");
    }
    
  }, [storedDarkMode]);

  return [storedDarkMode, setStoredDarkMode];
};