import React from "react";
import { Table } from 'reactstrap';
import PlayerTable from "./Table";



function Players (props) {

    return(
         <Table className= "striped bordered hover">
        <thead>
            <tr>
            <th>Player Name</th>
            <th>Country</th>
            <th># of searches</th>
            </tr>
        </thead>
        <tbody> 
    {props.players.map((woman, index) => (
            <PlayerTable
                key={index}
                name={woman.name}
                country={woman.country}
                searches={woman.searches}
                id={woman.id}
            />           
        ))};
        </tbody>
        </Table> 
    );
};

export default Players;
