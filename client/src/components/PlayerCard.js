import React from 'react';

import { Card } from 'semantic-ui-react';

const PlayerCard = ({ name, country, searches }) => {
	return (
		<div>
			<Card>
				<Card.Content header={name} />
				<Card.Content description={country} />
				<Card.Content extra>
					<p>Searches: {searches}</p>
				</Card.Content>
			</Card>
		</div>
	);
};

export default PlayerCard;
