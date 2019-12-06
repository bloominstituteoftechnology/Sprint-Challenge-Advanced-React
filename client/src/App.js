import React from "react";
import "./App.css";
import Playerlist from "./Component/Playerlist";
import NavBar from "./Component/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Playerlist />
    </div>
  );
}

export default App;
