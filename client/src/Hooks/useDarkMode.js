import React, { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage.js';

export const useDarkMode = () => {
	const [ isDark, setIsDark ] = useLocalStorage('true');

	useEffect(() => {
		isDark === true ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode');
	});

	const toggle = (e) => {
		e.preventDefault();
		setIsDark(!isDark);
	};

	return [ isDark, setIsDark, toggle ];
};
