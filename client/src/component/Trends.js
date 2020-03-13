import React from 'react';
import axios from 'axios';
import PlayerCard from './PlayerCard';

import './trends.scss';

const url1 = "http://localhost:5000/api/players";

class Trends extends React.Component {
	// State
	constructor(){
		super();
		this.state = { players: [] };
	};

	// API Get data
	componentDidMount(){
		axios.get(url1).then(res => {
			this.setState({
				players:res.data
			})
			//console.log("State ~ ", this.state);
		})
		.catch(err =>{
			console.log(err);
		})
	}

	render(){		
		return (
			<div>
				<PlayerCard data={this.state} />
			</div>
		);
	}

}

export default Trends
