import React from "react";
import "./App.css";
import Playerlist from "./Component/Playerlist";
import NavBar from "./Component/NavBar";

//Test
exports.sum = function(a, b) {
  return a + b;
};

function App() {
  return (
    <div className="App">
      <NavBar />
      <Playerlist />
    </div>
  );
}
export default App;
