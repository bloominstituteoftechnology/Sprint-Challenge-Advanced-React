import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardBody, CardText } from 'reactstrap';

const PlayerCard = ({ name, country, searches }) => {
    console.log("name", name)
    return (
        <div>
            <Card>
                <CardBody>
                    <CardText data-testid="name">Player Name: {name}</CardText>
                    <CardText data-testid="country">Country: {country}</CardText>
                    <CardText data-testid="searches">Player Searches: {searches}</CardText>


                </CardBody>
            </Card>
        </div>
    )
}

export default PlayerCard;