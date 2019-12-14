import React from 'react';

import {Container, Row, Col} from 'reactstrap';

// let players = [];

const PlayerList = props => {

  let players = props.players;


  return(
    <Container className='players-container'>
      <h1>List of Players:</h1>
      {players.map(curPlayer =>{

          return (
          <div className="curPlayer-container">
            <Row>
              <Col>
               <h1>Name: {curPlayer.name}</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <h2>Country: {curPlayer.country}</h2>
                <h3>Searches: {curPlayer.searches}</h3>
              </Col>
            </Row>
          </div>
          );
        })};



    </Container>

  )



}

export default PlayerList;
