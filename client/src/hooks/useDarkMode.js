import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage('dark mode', false);

  useEffect(() => {
    const body = document.body;
    darkMode
      ? /* add the class `dark-mode` to the `body` element */ body.classList.add(
          'dark-mode'
        )
      : /* remove the class from the `body` element */ body.classList.remove(
          'dark-mode'
        );
  }, [darkMode]);

  return [darkMode, setDarkMode];
};
