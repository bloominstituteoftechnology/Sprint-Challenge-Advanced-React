import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export function useDarkMode() {
	const [storageValue, setStorageValue] = useLocalStorage("dark-mode", false);

	useEffect(() => {
		if (storageValue) {
			document.querySelector("body").classList.add("darkMode");
		} else {
			document.querySelector("body").classList.remove("darkMode");
		}
	}, [storageValue]);

	return [storageValue, setStorageValue];
}