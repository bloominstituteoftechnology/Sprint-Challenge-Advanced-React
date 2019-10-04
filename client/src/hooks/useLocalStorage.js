import { useEffect } from 'react';

const useLocalStorage = (key, intialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        if (item) {
            return JSON.parse(item);
        } else {
            return intialValue;
        }
    });
    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value))
    }
    return [storedValue, setValue];
}

export default useLocalStorage;