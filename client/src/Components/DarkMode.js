import { useLocalStorage } from "./UseLocalStorage";
import { useEffect } from 'react';

export const DarkMode = (key) => {
  const [dark, setDark] = useLocalStorage(key, false);
  
  useEffect(() => {
    if(dark){
        document.body.classList.add('dark-mode');
    }else{
        document.body.classList.remove('dark-mode');
    }
  }, [dark])
  
  return [dark, setDark];
};