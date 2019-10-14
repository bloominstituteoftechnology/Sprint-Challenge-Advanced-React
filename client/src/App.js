import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Headings from './components/Headings';
import Body from './components/Body';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
    data: []
   };
  }
  componentDidUpdate(){
  }
  componentDidMount(){
    this.getData();
  }

  getData = () => {
    axios.get('http://localhost:5000/api/players')
    .then(res=>{
      this.setState({ data: res.data })
    }).catch(err=>{console.log(err)})
  }

  render() {
    return (
    <div className="App">
      <Navbar />
      <Headings />
      <Body data = {this.state.data }/>
    </div>
  );
}
}

export default App;
