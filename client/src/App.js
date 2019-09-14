import React from "react";
import logo from "./logo.svg";
import "./App.css";
import FectchData from "./components/FetchData";
import Players from "./components/Players";

function App() {
  return (
    <div className="App">
      {/* <Players /> */}
      <p>Players</p>
      <FectchData />
    </div>
  );
}

export default App;
