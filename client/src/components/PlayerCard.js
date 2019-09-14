import React from 'react'
import { Card, Feed } from 'semantic-ui-react'

 const fontSize= {
     fontSize: "20px",
 }

const PlayerCard = (props) => (

    <Card>
     <Card.Content>
     <h1 style={fontSize}>{props.players.name}</h1>
      </Card.Content>
      <Card.Content>
      {console.log("Players",props)}
        <Feed>
          <Feed.Event>
           Searches:<h4>{props.players.searches}</h4>   
            <Feed.Content>
              
              <Feed.Summary>
              
             
              </Feed.Summary>
            </Feed.Content>
          </Feed.Event>
          Country: <h2>{props.players.country}</h2>
        </Feed>
      </Card.Content>
    </Card>
  )
  
  export default PlayerCard;
  