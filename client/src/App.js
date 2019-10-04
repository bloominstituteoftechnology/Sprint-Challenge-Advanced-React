import React, { Component } from "react";
import axios from "axios";
import "./App.scss";
import Cards from "./components/Cards";
import NavBar from "./components/NavBar";

/* function App() {
  return (
    <div className="App">
      
    </div>
  );
} */

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/api/players`)
      .then(res => this.setState({ data: res.data }));
  }

  render() {
    console.log(this.state.data);

    return (
      <div className="home">
        <NavBar />
        <Cards data={this.state.data} />
      </div>
    );
  }
}

export default App;
