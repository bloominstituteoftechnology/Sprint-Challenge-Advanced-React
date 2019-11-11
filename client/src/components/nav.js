import React from "react";
import { useLightMode } from './hooks/useLightMode';
import styled from "styled-components";

const Lbutton = styled.button `
box-sizing: border-box;

background-color: transparent;
border-radius: 0.6em;
cursor: pointer;
display: flex;
align-self: center;
font-size: 1rem;
font-weight: 400;
line-height: 1;
margin: 20px;
padding: 1.2em 2.8em;
text-decoration: none;
text-align: center;
text-transform: uppercase;
box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px #0000003d;
font-weight: 700;
`;
const Navbar = () => {
  const [lightMode, setLightMode] = useLightMode(false);
  return (
    <nav>
      <h1>Women's World Cup 2019 Player Rankings</h1>
      <div>
        <Lbutton
          onClick={
            e => {
                e.preventDefault();
                setLightMode(!lightMode);
                if(!lightMode) {
                    e.target.textContent = "Dark Mode"
                }
                else 
                    e.target.textContent = "light Mode"
            }
          }
          className={lightMode ? "toggle toggled" : "toggle"}
        >
          Light Mode
        </Lbutton>
      </div>
    </nav>
  );
};
export default Navbar;