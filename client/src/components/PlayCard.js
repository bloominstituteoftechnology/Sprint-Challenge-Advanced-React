import React from 'react';
import styled from 'styled-components';

const Player = styled.div`
    border: 4px solid white;
    margin: 30px;
    width: 230px;
    background-color: #91b5e4;
`


const PlayCard = (props) => {

    const {
        name,
        country,
        searches,
        id } = props.user;

    return (
        <Player>
            <p>Name: {name}</p>
            <p>Country: {country}</p>
            <p>Searches: {searches}</p>
            <p>{id}</p>
        </Player>
    )
}

export default PlayCard;