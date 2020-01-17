import React from "react";



const Playercard = props => {
  return (
    <div className="card">
      
          <h3 className="name">Name: {props.name}</h3>
          <h5 className="country">Country: {props.country}</h5>
          <p key={props.id}></p>
         
      
      </div>
  );
};
export default Playercard;


