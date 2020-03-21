import { useState, useEffect } from 'react';

const useUseColors = initialValue => {
	const [value, setValue] = useState(initialValue);

	useEffect(() => {
		value
			? document.body.classList.add('colors')
			: document.body.classList.remove('colors');
	}, [value]);
	return [value, setValue];
};

export default useUseColors;
