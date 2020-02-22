import { useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const useDarkMode = initialValue => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", initialValue);
  useEffect(() => {
    return darkMode
      ? document.querySelector("body").classList.add("dark-mode")
      : document.querySelector("body").classList.remove("dark-mode");
  }, [darkMode]);
  
  return [darkMode, setDarkMode];
};