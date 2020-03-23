import React from 'react';
import './App.css';
import Navbar from './addOns/Navbar.js'
import Form from './addOns/Forms.js'
import { render } from '@testing-library/react';
import SignupForm from './addOns/Forms.js';
import Axios from 'axios';

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
    Axios
    .get('http://localhost:5000/api/players')
    .then(response => {
      console.log(response)
      this.setState({
        name: response.data
      })
    })
    .catch(error => console.log('error loading', error))
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.name !==this.state.name) {
      Axios
      .get('http://localhost:5000/api/players')
      .then(response => {
        this.setState({
          name: response.data.name,
          country: response.data.country,
          searches: response.data.searches
        });
      })
      .catch(error => console.log('error', error))
    }
  }
  render(){
    return (
      <div className="App">
        <Navbar/>
        <Form signup={SignupForm}/>
       {this.state.name.map(name=>{
         return(<div><h2>{name.name}</h2><p>{name.country}</p><p>{name.searches}</p></div>)
       })}
      </div>
    );
  }
}
export default App;
