import React from "react";
import logo from "./logo.svg";
import "./styles.scss";
import Players from "./Components/Players";
import ToggleButton from "./Components/ToggleButton";

function App() {
  return (
    <div className="App">
      <>
        <ToggleButton />
        <Players />
        hello world
      </>
    </div>
  );
}

export default App;
