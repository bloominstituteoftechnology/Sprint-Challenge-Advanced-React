import React from 'react';
import './App.css';

import { useAxios } from './Hooks/useAxios.js';
import CardList from './components/CardList.js';

function App() {
	const [ data, setData ] = useAxios([]);

	return (
		<div className="App">
			<CardList data={data} />
		</div>
	);
}

export default App;

// Class version

// class App extends React.Component {
// 	constructor() {
// 		super();
// 		this.state = { data: [] };
// 	}

// 	componentDidMount() {
// 		const url = 'http://localhost:5000/api/players';
// 		axios.get(url).then((res) => {
// 			this.setState({ data: res.data });
// 		});
// 	}

// 	render() {
// 		return (
// 			<div className="App">
// 				<CardList data={this.state.data} />
// 			</div>
// 		);
// 	}
// }

// class App extends React.Component
