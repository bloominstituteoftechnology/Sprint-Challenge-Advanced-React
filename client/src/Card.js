import React from "react";

const Card = props => {
  return (
    <div className="cards">
      <h3>Name: {props.name}</h3>
      <p>Country: {props.country}</p>
      <p>Searches: {props.searches}</p>
    </div>
  );
};

export default Card;
