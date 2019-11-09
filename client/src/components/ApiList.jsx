import React from "react";
import ApiDataCard from "./ApiDataCard";

const ApiList = props => {
  const data = props.list;
  console.log(data);
  return (
    <div className="card-div">
      {props.list.map(each => (
        <ApiDataCard user={each} key={each.id} />
      ))}
    </div>
  );
};

export default ApiList;
