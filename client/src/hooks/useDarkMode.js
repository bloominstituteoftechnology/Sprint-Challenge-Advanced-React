import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

export const useDarkMode = () => {
  const [values, setValues] = useLocalStorage("nighttime", true);
  const body = document.querySelector("body");

  useEffect(() => {
    if (values) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  }, [values]);

  return [values, setValues];
};

export default useDarkMode;