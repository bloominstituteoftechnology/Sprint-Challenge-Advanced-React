import React from "react";
import "./App.css";
import Trends from "./component/Trends";
import { useDarkMode } from "./hook/useDarkMode";

function App() {
	const [darkMode, setDarkMode] = useDarkMode();

	return (
		<div>

			<label>
				<input	type="checkbox"
					onChange={event => setDarkMode(!darkMode)}
					checked={!!darkMode}
				/>Dark Mode
			</label>

			<Trends />

		</div>
	);
}

export default App;