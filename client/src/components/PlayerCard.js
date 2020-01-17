import React from 'react';



const PlayerCard = (props) => {
console.log(props)
  return (
    <div key={props.key}>
      <p>Name: {props.name} </p>
      <p>From: {props.country}</p>
    </div>
    )
}

export default PlayerCard