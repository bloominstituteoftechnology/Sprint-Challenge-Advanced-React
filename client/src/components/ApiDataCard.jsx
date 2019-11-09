import React from "react";
import "./cardStyle.css";

const ApiDataCard = props => {
  console.log(props.user);
  const { name, id, country, searches } = props.user;

  function toggleGit() {
    let gitChart = document.getElementById(`${id}`);
    let butMore = document.getElementById(`${id}_More`);
    let butLess = document.getElementById(`${id}_Less`);
    let controlArr = [gitChart, butMore, butLess];
    for (let i = 0; i < controlArr.length; i++) {
      if (controlArr[i].style.display === "none") {
        controlArr[i].style.display = "block";
      } else {
        controlArr[i].style.display = "none";
      }
    }
  }

  return (
    <div className="card-container">
      <section className="top">
        <div className="user-content">
          <h2>Name: {name}</h2>
          <p>Country: {country}</p>
          <p>Searches: {searches}</p>
        </div>
      </section>
      <section className="bottom">
        <img
          className="user-git"
          id={id}
          alt={`${id}'s image`}
          style={{ display: "none" }}
        />
      </section>
      <button
        onClick={toggleGit}
        className="button-open"
        id={`${id}_More`}
        style={{ display: "block" }}
      >
        More
      </button>
      <button
        onClick={toggleGit}
        className="button-close"
        id={`${id}_Less`}
        style={{ display: "none" }}
      >
        Less
      </button>
    </div>
  );
};

export default ApiDataCard;
