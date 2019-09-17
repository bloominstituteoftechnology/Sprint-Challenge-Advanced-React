import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';



function useDarkMode() {
const [darkmode, setDarkMode] = useLocalStorage('dark');
useEffect(() => {
 {darkmode ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode'); }
}, [darkmode]);
const setMode = light => {
setDarkMode(light);
window.localStorage.setItem('dark', JSON.stringify(light));
}
return [darkmode, setMode]
}

export default useDarkMode;