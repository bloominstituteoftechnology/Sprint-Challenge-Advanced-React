import React from "react";

const PlayerCard = ({ key, name, country, searches }) => {
    return (
        <div className="playercard" data-testid={key}>
            <h2>Name: {name}</h2>
            <h3>Country: {country}</h3>
            <h3>Searches: {searches}</h3>
        </div>
    )
}
export default PlayerCard 