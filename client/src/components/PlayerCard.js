import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardBody, CardText } from 'reactstrap';

const PlayerCard = ({ name, country, searches }) => {
    console.log("name", name)
    return (
        <div>
            <Card>
                <CardBody>
                    <CardText>Player Name: {name}</CardText>
                    <CardText>Country: {country}</CardText>
                    <CardText>Player Searches: {searches}</CardText>


                </CardBody>
            </Card>
        </div>
    )
}

export default PlayerCard;