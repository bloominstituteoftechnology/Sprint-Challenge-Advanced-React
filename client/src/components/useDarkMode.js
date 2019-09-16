import  {useEffect} from "react";
import useLocalStorage from "./useLocalStorage";

export const useDarkMode = ()=> {
  
    const [storedValue, setstoredValue] = useLocalStorage("darkMode")

    useEffect(() => {
        if (storedValue) {
           document.body.classList.add("dark-mode")
        } else {
            document.body.classList.remove("dark-mode")
        }

    }, [storedValue]);
    return [storedValue, setstoredValue]
}