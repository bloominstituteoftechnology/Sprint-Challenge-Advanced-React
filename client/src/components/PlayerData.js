  
import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { Card } from "semantic-ui-react";

const PlayerData = props => {
  const { data } = props;
  const [value, setValue] = useLocalStorage("players", data);

  return (
    <Card.Group>
      {value.map(person => {
        return (
          <Card key={person.id}>
            <Card.Content>
              <Card.Header>{person.name}</Card.Header>
              <Card.Meta>Searches: {person.searches}</Card.Meta>
              <Card.Description>{person.country}</Card.Description>
            </Card.Content>
          </Card>
        );
      })}
    </Card.Group>
  );
};

export default PlayerData;