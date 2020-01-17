import React from "react";
import MainHeader from "./components/Navbar";
import PlayersList from "./components/PlayersList";
import PlayersSearchForm from "./components/PlayersSearchForm";
import "./App.css";
import axios from "axios";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      name: "",
      country: ""
    };
  }

  componentDidMount() {
    // console.log("Component did mount!");

    axios
      .get('http://localhost:5000/api/players')
      .then((res) => {
        console.log(res.data);
        this.setState({
          data: res.data,
          name: res.data.name,
          country: res.data.country
        });
      })
      .catch(error => {console.log(error)});
  }
  render() {
    return (
      <div className="App">
        <MainHeader />
        <PlayersSearchForm
          data={this.state.data}
          name={this.state.name}
          country={this.state.country}
        />
        <PlayersList
          data={this.state.data}
          name={this.state.name}
          country={this.state.country}
        />
      </div>
    );
  }
}

export default App;