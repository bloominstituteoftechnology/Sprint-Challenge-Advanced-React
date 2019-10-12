import React from 'react';

function Display(props) {
	return (
		<div className="names">
			<div className="display">
				<h1>Name:{props.name}</h1>
				<h1>Country: {props.country}</h1>
				<h1>Searches: {props.searches}</h1>
			</div>
		</div>
	);
}

export default Display;
