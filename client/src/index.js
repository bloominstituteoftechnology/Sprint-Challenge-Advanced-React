import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/nav";
import useDarkMode from "./hooks/useDarkMode";
import DataRendering from "./components/dataRendering";
import useLocalStorage from "./hooks/useLocalStorage.js";
import "./style.scss";

function App() {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  useDarkMode(darkMode);

  return (
    <div className='App'>
      <Navbar darkMode={darkMode} toggleMode={toggleMode} />
      <DataRendering />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
