import React from 'react';
import './App.css';
import axios from "axios";
import Navbar from "./components/navbar"
import "./styles.scss";

class App extends React.Component {
 constructor(){
   super();
   this.state = {
     myData: {},
     country: []
   }
 }
 componentDidMount(){
    axios
     .get("http://localhost:5000/api/players")
     .then(res => {
       console.log(res)
       this.setState({
         country: res.data
       })
     })
     .catch(err => console.log(err))
 }
 render(){
   return (
     <div className="App">
       <Navbar />
       <div className="follower">
         {this.state.country.map(follower => (
           <div key={follower.id}>
             <p>{follower.name}</p>
             <p>{follower.country}</p>
           </div>
         ))}
       </div>
     </div>
   );
 }
}
export default App;