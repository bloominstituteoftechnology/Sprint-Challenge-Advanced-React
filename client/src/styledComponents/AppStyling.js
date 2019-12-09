import styled from "styled-components";

// App

export const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
`;

// DataCard

export const SoccerCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  min-height: 300px;
  border: 2px solid black;
  padding: 2%;
  margin: 2%;
  background-image: linear-gradient(#b19cd9, #86fde8);
  border-radius: 50px;
`;

// NavHeader

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 4px solid rgba(160, 160, 160, 0.4);
  margin-bottom: 1.5%;
  padding: 0 2% 0 2%;
  background: gray;
  background-image: linear-gradient(#acb6e5, #86fde8);
  color: black;
`;

export const H2Nav = styled.h2`
  // margin: 1% auto;
  margin-right: 5%;
  margin-left: 1%;
  border: 2px solid black;
  padding: 1%;
  border-radius: 50px;
  background: #b19cd9;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2%;
`;

export const NavButton = styled.button`
  background-color: #b19cd9;
  display: inline-block;
  padding: 0.3em 1.2em;
  margin: 0 0.1em 0.1em 0;
  border: 2px solid black;
  border-radius: 2em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  color: black;
  text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);
  text-align: center;
  transition: all 0.2s;
  outline: none;
`;