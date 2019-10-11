import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardBody, CardText, Col, Row } from 'reactstrap';

const PlayerCard = ({ name, country, searches }) => {
    console.log("name", name)
    return (
        <div>
            {/* <Row> */}
            <Col sm="6">
                <Card>
                    <CardBody className="text-center">
                        <CardText data-testid="name">Player Name: {name}</CardText>
                        <CardText data-testid="country">Country: {country}</CardText>
                        <CardText data-testid="searches">Player Searches: {searches}</CardText>
                    </CardBody>
                </Card>
            </Col>
            {/* </Row> */}
        </div>
    )
}

export default PlayerCard;