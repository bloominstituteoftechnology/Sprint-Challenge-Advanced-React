import React, {useState, useEffect} from "react";
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
   this.state = {
      players: [],
     
    };
  

  }


  componentDidMount(){
fetch('http://localhost:5000/api/players')
.then(

   

  render() {
    return(
      <div className="App">
<h1> App is running </h1>



      </div>
    )
  }
}
//{//newData.map((props,index )=> <h1 key={props.name + "-" + index}>Name: {props.name} </h1>)} 

export default App 