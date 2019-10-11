import React from 'react';


const PlayersCard = (props) => {
    console.log(`PlayersCard`,props)
  return (
    <div>
      
    
        <h3>Player: {props.name}, Country {props.country}</h3>
      
    </div>
  );
};

export default PlayersCard;