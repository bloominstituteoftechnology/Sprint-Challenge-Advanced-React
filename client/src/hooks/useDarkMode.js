import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage.js";

export function useDarkMode() {
  const [darkMode, setDarkMode] = useLocalStorage("dark");

  useEffect(() => {
    darkMode
      ? document.querySelector("body").classList.add("dark-mode")
      : document.querySelector("body").classList.remove("dark-mode");
  }, [darkMode]);

  return [darkMode, setDarkMode];
}