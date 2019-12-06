import React from 'react';
import axios from "axios";
import './App.css';
import Navbar from "./components/Navbar";
import "@testing-library/jest-dom";


class App extends React.Component {
  state = (
    name: "",
    id: "",
    country: "",
    list: []
  );
  componentDidMount(){
    axios
    .get("http://localhost:5000/api/players")
    .then(res => {
      console.log(res);
      this.setState({
        list: res.data,
        name: res.data.name,
        id: res.data.id,
        country: res.data.country
      });
    })
    .catch(err => console.log(err));
  }
  handleChanges
}

export default App;
