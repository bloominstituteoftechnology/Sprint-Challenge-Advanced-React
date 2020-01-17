import React, {Component} from 'react';
import './App.css';
import axios from 'axios'
import Display from './components/Display';
import Navbar from './components/Navbar';


//data comes in as an array of data with this obj VVVVVVVV
// // {
//   name: "Alex Morgan",
//   country: "United States",
//   searches: 100,
//   id: 0
// }
/////////////////////////////////////////////////////////////
class App extends Component {

  constructor(){
    super()
    this.state = {
      array: [{
        name: "dude",
        country: "yes",
        searches: 0,
        id: 0
      }]
    }
  }

  componentDidMount(){
    axios.get('http://localhost:5000/api/players').then(
      res => {
        console.log(res.data)
       this.setState({array: res.data})
      }
    )
  }


  
  render(){
    console.log(this.state.array[0].name)
  return (
    <div className="App">
      <Navbar />
        <div className="card-container">
            {this.state.array.map((elm)=>{
              return(
                <Display name={elm.name} country={elm.country} searches={elm.searches} id={elm.id} key={elm.id} />
              )
            })}
        </div>
    </div>
  );
  }
}

export default App;
