import React, { useEffect } from "react";

function DisplayData(props) {
  const { info } = props;
  useEffect(() => {
    console.log(info);
  }, [info]);

  return (
    <div className="card-container">
      {props.info.map(info => (
        <div key={info.id} className="person-card">
          <h1>Name: {info.name}</h1>
          <p>Country: {info.country}</p>
          <p>Searches: {info.searches}</p>
        </div>
      ))}
    </div>
  );
}

export default DisplayData;
