import React from 'react';
import axios from "axios";
import Display from "./components/Display"
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state={
      data:[]
    }
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        this.setState({data: res.data});
      })
      .catch(err => console.log(err))
  }

  render() {
    return(
      <div>
        <Display data={this.state.data} />
      </div>
    )
  }


}

export default App;
