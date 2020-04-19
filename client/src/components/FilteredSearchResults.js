import React from 'react'
import { Card, Segment, Flag } from "semantic-ui-react";
import useStyling from '../hooks/useStyling'
import PlayerCardContent from './PlayerCardContent'

function FilteredSearchResults(props) {
    const [eventHandler, eventHander2] = useStyling()
    console.log("FilteredSearchResults", props)
    return (
        <Card.Group itemsPerRow={6}>
        {props.players.map(player => {
          return (
            <Card key={player.id} style={{ textAlign: "center" }}>
              <Card.Content>
                <Card.Header>{player.name}</Card.Header>
          <Card.Meta>{player.country}</Card.Meta>
              </Card.Content>
              <Segment className='wobble' onMouseEnter={eventHandler} onMouseLeave={eventHander2} >
                <Flag name={player.country.toLowerCase()} />
              </Segment>
            </Card>
          );
        })}
      </Card.Group>
    )
}

export default FilteredSearchResults


