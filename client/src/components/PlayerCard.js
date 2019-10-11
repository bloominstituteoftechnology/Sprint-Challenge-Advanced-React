import React from 'react';
import { Card, Icon } from 'semantic-ui-react';

const PlayerCard = props => {
  console.log('PlayerCard', props);
  const { player } = props;
  return (
    <div className='player-card'>
      <Card key={player.id}>
        <Card.Content header={player.name} />
        <Card.Content description={player.country} />
        <Card.Content extra>
          <Icon name='search' /> {player.searches} Searches
        </Card.Content>
      </Card>
    </div>
  );
};

export default PlayerCard;