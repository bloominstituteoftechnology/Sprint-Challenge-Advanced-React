import useLocalStorage from "./useLocalStorage";
import { useEffect } from "react";

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage("dark-mode", false);

  useEffect(() => {
    const body = document.querySelector("body");
    if (darkMode){
       body.classList.add("dark-mode");
    }
    else{
      body.classList.remove("dark-mode");
    }
}, [darkMode]);

  return [darkMode, setDarkMode];
};

export default useDarkMode;


// import {useEffect} from "react";
// import useLocalStorage from './useLocalStorage';

// const useDarkMode = () => {
//     const [values, setValues] = useLocalStorage("darkMode");
//     useEffect(()=> {
//         if (values === true) {
//             document.body.classList.add("dark-mode")
//         } else {
//             document.body.classList.remove("dark-mode")
//         }
//     },[values])
//     return [values , setValues]
// }
// export default useDarkMode;
