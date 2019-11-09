import useLocalStorage from "./useLocalStorage";
import { useEffect } from "react";

const useDarkMode = val => {
  const [darkMode, setDarkMode] = useLocalStorage(val);
  //use with: const [darkMode, setDarkMode] = useDarkMode(false);
  //in NavBar.jsx

  useEffect(() => {
    const body = document.querySelector("body");
    darkMode
      ? body.classList.add("dark-mode")
      : body.classList.remove("dark-mode");
  }, [darkMode]);
  return [darkMode, setDarkMode];
};

export default useDarkMode;
