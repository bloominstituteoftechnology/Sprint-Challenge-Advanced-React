import React from 'react';
import { Card } from 'semantic-ui-react';

const PlayerCard = (props) => {
  const { id, name, country, searches } = props.player
  return(
    <Card key={id}>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{country}</Card.Meta>
        <Card.Description>
          Searches: {searches}
        </Card.Description>
      </Card.Content>
    </Card>
  )
}

export default PlayerCard;