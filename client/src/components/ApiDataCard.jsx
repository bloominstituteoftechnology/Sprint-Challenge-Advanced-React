import React from "react";
import "./cardStyle.css";

const ApiDataCard = props => {
  console.log(props.user);
  const { name, id, country, searches } = props.user;

  return (
    <div className="card-container">
      <section className="top">
        <div className="user-content">
          <h2>Name: {name}</h2>
          <p>Country: {country}</p>
          <p>Searches: {searches}</p>
        </div>
      </section>
    </div>
  );
};

export default ApiDataCard;
