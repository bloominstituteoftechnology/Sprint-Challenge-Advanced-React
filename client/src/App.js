import React from 'react';
import DMHeader from "./components/DMHeader";
import SearchForm from "./components/SearchForm";
import PlayerList from "./components/PlayerList";
import Axios from "axios;"

import './App.css';

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
  console.log("Mount Works!");

  Axios
  .get("https://localhost:5000/api/players")
  .then(res => {
    console.log(res.data);
    this.setState({
      data: res.data,
      name: res.data.name,
      country: res.data.country
    });
  })
  .catch(error => console.log("Players Benched!"));
}

  render() {
  return (
    <div className="App">
      <DMHeader />
      <SearchForm />
      <PlayerList />
    </div>

  );
}
}

export default App;
