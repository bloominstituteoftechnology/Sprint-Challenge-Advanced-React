import { useState, useEffect } from "react";

/* export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });
  const setValue = value => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };
  return [storedValue, setValue];
}

export const useDarkMode = (initialValue) => {
  // Use our useLocalStorage hook to persist state through a page refresh.
  // Read the recipe for this hook to learn more: usehooks.com/useLocalStorage
  const [darkModeState, setDarkMode] = useLocalStorage("true", initialValue);

	useEffect(() => {
		if (darkModeState === true) {
			document.body.classList.add('dark-mode')
		} else {
			document.body.classList.remove('dark-mode')
		}
  }, [darkModeState])
  
  const toggleDarkMode = (evt) => {
		evt.preventDefault();
		setDarkMode(!darkModeState);
	}

  return [darkModeState, toggleDarkMode];
};
 */
export const useDarkMode = (initialValue) => {
  const [darkModeState, setDarkModeState] = useState(false);

  const toggleDarkMode = (evt) => {
    evt.preventDefault();
    setDarkModeState(!darkModeState);
  }

  useEffect(() => {
    if (darkModeState === true) {
      document.body.classList.add("dark-mode")
    } else {
      document.body.classList.remove("dark-mode")
    }
  }, [darkModeState])

  return [darkModeState, toggleDarkMode]
} 