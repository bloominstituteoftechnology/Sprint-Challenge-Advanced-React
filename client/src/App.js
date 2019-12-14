import React from 'react';

// import './App.css';

//components

//data
import Axios from 'axios'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      isLoading:false
    }
  }

  componentDidMount(){
    Axios.get('http://localhost:5000/api/players')
    .then(res => {console.log(res.data)})
    .then(res => {
      this.setState({
        name:res.data.name,
        country:res.data.country
      })
    })
    .catch(err => {console.log(err)})
  }

  render(){
    return (
      <div>
      </div>
    );
  }
}

export default App;
