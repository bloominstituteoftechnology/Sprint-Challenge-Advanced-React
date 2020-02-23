  
import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import styled from "styled-components";
import Navigation from "./Components/Navigation";
import COLOR from './color'



const Header = styled.h1`
  text-align: center;
  width: 100%;
`;

const PlayerCard = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  // flex-wrap: nowrap;
  width: 100px;
  border: 1px solid black;
  margin: 20px;
  background-color: ${COLOR.backgroundLight};
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20px;
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/api/players").then(response => {
      console.log(response.data);
      this.setState({
        players: response.data
      });
    });
  }

  render() {
    return (
      
      <Container>
      <Navigation/>
        <Header>
          <h1>Data About Soccer</h1><br/>
        </Header>
        {this.state.players.map(players => {
          return (
            <PlayerCard>
              <div>
                <p>{players.name}</p>
                <p>{players.country}</p>
                <p>{players.searches}</p>
              </div>
            </PlayerCard>
          );
        })}
      </Container>
    );
  }
}

export default App;