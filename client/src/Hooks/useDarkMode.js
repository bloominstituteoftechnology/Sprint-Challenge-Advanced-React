import { useEffect } from "react";
import { useLocalStorage } from "../Hooks/useLocalStorage";

export function useDarkMode(initialValue) {
  const [darkMode, setDarkMode] = useLocalStorage(initialValue);
  useEffect(() => {
    darkMode
      ? document.body.classList.add("dark-mode")
      : document.body.classList.remove("dark-mode");
  }, [darkMode]);
  console.log("darkmode enabled");
  return [darkMode, setDarkMode];
}
