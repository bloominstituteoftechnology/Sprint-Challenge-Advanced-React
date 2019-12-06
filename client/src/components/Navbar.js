import React from 'react';

import { useDarkMode } from '../hooks/useDarkMode';

const Navbar = () => {
	const [ darkMode, setDarkMode ] = useDarkMode(false);
	const toggleMode = (e) => {
		e.preventDefault();
		setDarkMode(!darkMode);
	};

	return (
		<nav className="navbar navbar2">
			<h1>Soccer Players Title</h1>
			<div className="dark">
				<button onClick={toggleMode} className={darkMode ? 'toggle toggled' : 'toggle'}>
					Toggle Mode
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
