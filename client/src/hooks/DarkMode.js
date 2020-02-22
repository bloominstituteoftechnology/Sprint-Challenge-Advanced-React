import useLocalStorage from "./useLocalStorage";
import { useEffect } from "react";

const useDarkMode = (key, initalValue) => {
    const [DarkModeEnabled, setDarkModeEnabled] = useLocalStorage(key, initalValue);

    useEffect(() => {
        if(DarkModeEnabled === true) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    }, [DarkModeEnabled]);

    return [DarkModeEnabled, setDarkModeEnabled]

}

export default useDarkMode;