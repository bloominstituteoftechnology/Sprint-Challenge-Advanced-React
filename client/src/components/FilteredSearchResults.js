import React, { useState } from "react";
import { Card, Segment, Flag } from "semantic-ui-react";
import useStyling from "../hooks/useStyling";

function FilteredSearchResults(props) {
  const [eventHandler, eventHander2] = useStyling();
  const [country, setCountry] = useState([]);
  console.log("PROPS", props.country)
  console.log("COUNTRY", typeof(country))

  const filteredByCountry = async () => {
    const currentCountry = await props.players;
    return currentCountry;
  };
  
  
  filteredByCountry().then((res) => setCountry(res));
  filteredByCountry().then((res) => console.log("ressres));


//   const filteredByCountry2 = country.filter((country) => {
//     return country.country === props.country
//   });
//   console.log("filler", filteredByCountry2)

  return (
    <>
      {/* {
            props.players.filter(country => {
                return (
                    country.country === props.country
                )
            })
        } */}
      <Card.Group itemsPerRow={6}>
        {props.players.map((player) => {
          return (
            <Card key={player.id} style={{ textAlign: "center" }}>
              <Card.Content>
                <Card.Header>{player.name}</Card.Header>
                <Card.Meta>{player.country}</Card.Meta>
              </Card.Content>
              <Segment
                className="wobble"
                onMouseEnter={eventHandler}
                onMouseLeave={eventHander2}
              >
                <Flag name={player.country.toLowerCase()} />
              </Segment>
            </Card>
          );
        })}
      </Card.Group>
    </>
  );
}

export default FilteredSearchResults;
