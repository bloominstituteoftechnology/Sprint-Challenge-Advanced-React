import useLocalStorage from "./useLocalStorage";
import { useEffect } from "react";

const useDarkMode = (key, initialValue) => {
  const [darkModeOn, setDarkModeOn ] = useLocalStorage(key, initialValue);


  const toggleDarkMode = e => {
    e.preventDefault();

    return darkModeOn ? setDarkModeOn(true): setDarkModeOn(false)
  };

  useEffect(() => {

    if (darkModeOn === true) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [ darkModeOn ]);

  return [ darkModeOn, setDarkModeOn, toggleDarkMode ];
};

export default useDarkMode