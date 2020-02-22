import useLocalStorage from "./useLocalStorage";
import { useEffect } from "react";

const useDarkMode = () => {
    const [DarkModeEnabled, setDarkModeEnabled] = useLocalStorage("darkMode");

    useEffect(() => {
        if(DarkModeEnabled === false) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    }, [DarkModeEnabled]);

    return [DarkModeEnabled, setDarkModeEnabled]

}

export default useDarkMode;