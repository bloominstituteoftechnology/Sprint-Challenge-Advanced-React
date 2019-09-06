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
  console.log(props);
  return (
    <div>
      {props.player.map(player => {
        return (
          <div>
            <BodyCard>
              <Header>
                <h2>{player.name}</h2>
              </Header>
              <p>Country: {player.country}</p>

              <p>Search Ranking: {player.searches}</p>
            </BodyCard>
          </div>
        );
      })}
    </div>
  );
}

export default WorldCupCard;
