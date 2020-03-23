import React from 'react';
import './App.css';
import Navbar from './addOns/Navbar.js'
import Form from './addOns/Forms.js'
import { render } from '@testing-library/react';

class App extends React.Component{
  constructor(){
    super()
    this.state={
      name:[],
      country:[],
      searches:[]
    };
  }
  componentDidMount() {
    fetch('http://localhost:3000/api/name')
    .then(response => response.json())
    .then(response=>{
        console.log('response from app.js: dg', response)
        this.setState({ name: response })
    })
    .catch(error => console.error(error));
  }
  render(){
    return (
      <div className="App">
        <Navbar/>
        <Form/>
       {this.state.name.map(name=>{
         return(<div><h2>{this.state.name.name}</h2><p>{this.state.name.country}</p><p>{this.state.name.searches}</p></div>)
       })}
      </div>
    );
  }
}
export default App;
