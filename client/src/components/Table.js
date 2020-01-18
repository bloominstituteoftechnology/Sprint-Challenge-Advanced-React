import React from "react";
import { Table } from "reactstrap";

const PlayerTable = (props) =>{

    return(
    <Table className="striped bordered hover">
      
     
        <tr>
          <td>{props.name}</td>
          <td>{props.country}</td>
          <td>{props.searches}</td>
        </tr>
        </Table>
      
    )
};

export default PlayerTable;