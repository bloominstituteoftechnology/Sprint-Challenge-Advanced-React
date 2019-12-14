import React, { useEffect } from "react";
// import our custom hook
import useLocalStorage from "./useLocalStorage.js";

const useDarkMode = (key, initialValue) => {
  // using the custom hook
  const [value, setValue] = useLocalStorage(key, initialValue);
   // adding/removing class names
  useEffect(() => {
    if (value == true) {
      document.querySelector("body").classList.add("dark-mode");
    } else {
      document.querySelector("body").classList.remove("dark-mode");
    }
    // watching for changes in value in the dependency array
  }, [value]);

  return [value, setValue];
};

export default useDarkMode;