import React from 'react';
import { Item, Card } from 'semantic-ui-react';

//using semantic ui react to render the props from server data to Items output


const PlayerList = (props) => (
  <Card.Group>
  <Card>
  <Card.Content>
    <Item.Content>
    <Item.Header>
        <h2>{props.players.name}</h2>
    </Item.Header>
    
    <Item.Description>
        
        
        <Item.Meta>
          <span> Searches: {props.players.searches}</span>
          <br />
          <span>Country: {props.players.country}</span>
          <br />
          <hr />
        </Item.Meta>
      </Item.Description>
    </Item.Content>
    
    </Card.Content>
    </Card>
    </Card.Group>
  
  // later a data bar graph for player stats down here:
  // const PlayerList = (props) => (
  //     <ResponsiveAreaBump
  //         data={props.players}
  //         margin={{ top: 40, right: 100, bottom: 40, left: 100 }}
  //         spacing={8}
  //         colors={{ scheme: 'nivo' }}
  //         blendMode="multiply"
  //         startLabel="id"
  //         axisTop={{
  //             tickSize: 5,
  //             tickPadding: 5,
  //             tickRotation: 0,
  //             legend: '',
  //             legendPosition: 'middle',
  //             legendOffset: -36
  //         }}
  //         axisBottom={{
  //             tickSize: 5,
  //             tickPadding: 5,
  //             tickRotation: 0,
  //             legend: '',
  //             legendPosition: 'middle',
  //             legendOffset: 32
  //         }}
  //     />
  // )
);

export default PlayerList;