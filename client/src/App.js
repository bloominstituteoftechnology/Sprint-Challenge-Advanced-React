import React from 'react';
import Players from './Components/Players';
import NavBar from './Components/NavBar';

//import components here
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className= 'App'>
        <NavBar />
        <Players />
        {/* render components here */}
      </div>
    )
  }

}
export default App;
