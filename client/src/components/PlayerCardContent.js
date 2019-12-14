import React from "react";
import { Card, Segment, Flag } from "semantic-ui-react";



const PlayerCardContent = props => {

  // const eventHandler =(event) => {
  //   console.log(event)
  // }
  // onMouseEnter={eventHandler}

  return (
    <Card.Group itemsPerRow={6}>
      {props.playerInfo.players.map(player => {
        return (
          <Card key={player.id} style={{ textAlign: "center" }}>
            <Card.Content>
              <Card.Header>{player.name}</Card.Header>
        <Card.Meta>{player.country}</Card.Meta>
            </Card.Content>
            <Segment >
              <Flag name={player.country.toLowerCase()} />
            </Segment>
          </Card>
        );
      })}
    </Card.Group>
  );
};

export default PlayerCardContent;