import React from 'react';

function PlayerDisplay(data) {
	console.log("~PlayerDisplay~", data);
	
	return (
		<div className="unit">

			<div className="box"> 
				<h2>{data.data.name}</h2>
			</div>

			<div className="box"> 
				<h2>{data.data.country}</h2>
			</div>

			<div className="box">
				<h2>{data.data.searches}</h2>
			</div>

		</div>
	);

}

export default PlayerDisplay
