import React, { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

export default function useDarkMode(value) {
  const [darkOrNah, setDarkOrNah] = useLocalStorage("isDark", value);

  useEffect(() => {
    const body = document.querySelector("body");
    if (darkOrNah === true) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  }, [darkOrNah]);

  return [darkOrNah, setDarkOrNah];
}
