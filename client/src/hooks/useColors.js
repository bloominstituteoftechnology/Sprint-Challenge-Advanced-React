import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useUseColors = (key, initialValue) => {
	const [value, setValue] = useLocalStorage(key, initialValue);

	useEffect(() => {
		value
			? document.body.classList.add('colors')
			: document.body.classList.remove('colors');
	}, [value]);
	return [value, setValue];
};

export default useUseColors;
