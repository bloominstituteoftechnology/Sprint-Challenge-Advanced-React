import React from "react";
import "./App.css";
import axios from "axios";

class App extends React.Component() {
  constructor() {
    super(
      (this.state = {
        data: []
      })
    );
  }

  
  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(response => {
        this.setState({ data: response.data });
      })
      .catch(err => {
        console.log("ERROR", err);
      });
  }

  render() {
    return (
      <div>
        <h1>App</h1>
      </div>
    );
  }
}

export default App;
