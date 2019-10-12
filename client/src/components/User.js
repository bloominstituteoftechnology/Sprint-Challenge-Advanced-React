import React from 'react';
import styled from 'styled-components';

const UserCard = styled.div `
    border: 3px solid grey;
    margin: 10px;
    padding-left: 5px;
`

function User(props) {
    return (
        <UserCard>
            <h1>{props.name}</h1>
            <h2>{props.country}</h2>
        </UserCard>
    )
}

export default User;