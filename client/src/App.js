import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Axios from "axios";
import ApiList from "./components/ApiList";
import NavBar from "./components/Navbar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      var1: "something",
      apiData: [],
      apiBase: "http://localhost:5000/api/players"
    };
  }

  componentDidMount() {
    this.getApi();
  }
  getApi() {
    Axios.get(this.state.apiBase)
      .then(res => {
        console.log(res);
        this.setState({ apiData: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <section className="player-info">
          {Array.isArray(this.state.apiData) &&
          this.state.apiData.length > 0 ? (
            <ApiList list={this.state.apiData} />
          ) : (
            console.log("empty")
          )}
        </section>
      </div>
    );
  }
}

export default App;
