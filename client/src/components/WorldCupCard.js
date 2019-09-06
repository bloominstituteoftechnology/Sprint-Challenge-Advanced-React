import React from "react";
import styled from "styled-components";

const BodyCard = styled.div`
  width: 300px;
  background-color: white;
  margin: 30px;
  flex-direction: column;
  border-radius: 25px;
  padding-bottom: 20px;
  color: black;
`;
const Header = styled.div`
  background-color: gray;
  color: white;
  padding: 20px;
  border-radius: 25px 25px 0px 0px;
`;

function WorldCupCard(props) {
  return (
    <div>
      <BodyCard>
        <Header>
          <h2>{props.name}</h2>
        </Header>
        <p>Country: {props.country}</p>

        <p>Search Ranking: {props.searches}</p>
      </BodyCard>
    </div>
  );
}

export default WorldCupCard;
