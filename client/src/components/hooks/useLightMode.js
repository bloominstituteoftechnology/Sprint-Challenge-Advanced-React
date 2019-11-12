import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export function useLightMode() {
  const [lightMode, setLightMode] = useLocalStorage("light");

  useEffect(() => {
    const body = window.document.body;
    if (lightMode) {
      body.classList.add("lightMode");
    } else {
      body.classList.remove("lightMode");
    }
  }, [lightMode]);

  return [lightMode, setLightMode];
}

