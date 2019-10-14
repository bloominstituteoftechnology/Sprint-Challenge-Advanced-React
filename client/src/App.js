import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components';
import Navbar from './components/Navbar';
import PlayerList from './components/PlayerList';
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
    <AppContainer>
      <Navbar />
      <PlayerList data = {this.state.data }/>
    </AppContainer>
  );
}
}

export default App;

const AppContainer = styled.div`
width: 50%;
margin: 0 auto;
border-radius: 5px;
`
