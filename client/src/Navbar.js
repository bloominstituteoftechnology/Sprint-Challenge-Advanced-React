import React, { useState } from 'react';
import useDarkMode from './hooks/useDarkMode';

const Navbar = () => {
	const [ darkMode, setDarkMode ] = useDarkMode(false);

	const toggleMode = (e) => {
		e.preventDefault();
		setDarkMode(!darkMode);
	};
	return (
		<div className="navbar">
			<h1>Welcome To The Greatest Players On Earth</h1>
			<button onClick={toggleMode} className={darkMode ? 'toggle toggled': 'toggle'}>
				HI
			</button>
		</div>
	);
};

export default Navbar;
