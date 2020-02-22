import React from "react";

const playerCard = props => {
    let data = props
  return (
    <div>
      {data.data.map((el, index) => {
        return (
          <div key={index}>
            <div>
              <h2>Name: {el.name}</h2>
              <h3>Country: {el.country}</h3>
              <h3>Searches: {el.searches}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default playerCard;
