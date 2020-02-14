import React from 'react';
import '../App.css';

const PlayerCard = props => {
    let data = props;

    return (
        <div className="playerCard_container">
      {data.data.map((el, index) => {
        console.log(el);
        
        return (
            <div className="playerCard">
            <div className="textcontent">
            <h2> Name: {el.name}</h2>
            <h2> Country: {el.country}</h2>
            <h2> Searches: {el.searches}</h2>
            </div>
            </div>
        )
      })}
    </div>
    )
}

export default PlayerCard;