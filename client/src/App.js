import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends React.Component {
constructor() {
  super();
  const [state, setState] = useState();
const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  }); 


}
compondentDidMount(){
axios.get('http://localhost:5000/api/players')
.then(res => this.setState({res.players}))
.catch( err  => console.log(err))

  }
 }
 render () {
  return (
    <div>
       
        {this.state.res.data.map(player => <div>{this.state.player}</div>)}
    </div>
  );
}


export default App;


// Class component that fetches data from the server you now have running - the data can be fetched from http://localhost:5000/api/players check 
//  Display the player data you receive from the API in progress 
//  Build a custom hook and use it in your app - this can be a localStorage hook, a fetch hook, a dark mode hook, or any other hook you would like
//  Write a "reasonable" amount of unit tests for your React components. What does "reasonable amount" mean? That is up to you to decide. Be ready to defend your choice to your TL
// filled in read.me 