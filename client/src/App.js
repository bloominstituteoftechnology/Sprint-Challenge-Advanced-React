import React from 'react';
import './App.css';
import axios from 'axios';

import { useAxios } from './Hooks/useAxios.js';

function App() {
	const [ data, setData ] = useAxios([]);
	console.log(data);
	return <div className="App">{/* <CardList /> */}</div>;
}

export default App;

// Class version

// class App extends React.Component
