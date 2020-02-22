import React from "react";

const playerCard = props => {
  return (
    <div className="playerCard_container">
      {props.data.map((el, index) => {
        console.log(el);

        return (
          <div  key={index} className="playerCard">
            <div className="textcontent">
              <h2> Name: {el.name}</h2>
              <h3> Country: {el.country}</h3>
              <h3> Searches: {el.searches}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default playerCard;
