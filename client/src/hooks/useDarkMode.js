import React, { useEffect}  from 'react';
import localStorage from "./useLocalStorage";


const useDarkMode = () => {
  const [darkMode, setDarkMode] = localStorage('hooksAreWeird');
  useEffect(() => {
    if (darkMode === true) {
      return document.querySelector("body").classList.add("dark-mode");
    } else {
      return document.querySelector("body").classList.remove("dark-mode");
    }
   
  }, [darkMode]);
   return [darkMode, setDarkMode];
};
export default useDarkMode;