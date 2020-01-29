import React from "react";

export default function PlayerCard(props) {
    return(
        <div className="PlayerCard">
            <h2>{props.name}</h2>
            <h3>{props.country}</h3>
            <h3>{props.searches}</h3>
        </div>
    );
}