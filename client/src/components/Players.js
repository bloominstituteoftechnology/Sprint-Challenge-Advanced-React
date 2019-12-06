import React from "react";

const Players = props => {
  return (
    <div className="playersCont">
      {props.players.map(person => (
        <p>
          Number of Searches: {person.searches} - {person.name},{" "}
          {person.country}
        </p>
      ))}
    </div>
  );
};

export default Players;

/*
0: {name: "Alex Morgan", country: "United States", searches: 100, id: 0}
1: {name: "Megan Rapinoe", country: "United States", searches: 99, id: 1}
2: {name: "Marta", country: "Brazil", searches: 18, id: 2}
3: {name: "Rose Lavelle", country: "United States", searches: 11, id: 3}
4: {name: "Carli Lloyd", country: "United States", searches: 9, id: 4}
*/
