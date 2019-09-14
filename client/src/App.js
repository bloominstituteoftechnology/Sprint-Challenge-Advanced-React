
import React, { useState, useEffect } from "react";
import './App.css';
import './index.css';
import { useForm } from "./hooks/useForm";
import axios from 'axios'
import { Card,  Button } from 'semantic-ui-react';

// class App extends Component {
//  constructor() {
//    super();
//    this.state = {
//      name: []
//    };
//  }
//  componentDidMount(){
//    fetch("http://localhost:5000/api/players")
//      .then(res => res.json())
//     //  .then(res => console.log(res) )
//      .then(res => this.setState({name:res}))
//      .catch(err => console.log('Error', err))
//  }
//  render() {
//    return(

//   <div className='Profile'>
  
  
//          <h1> Womens </h1>
//      {this.state.name.map(friend => (
//          <div key='women'>
//      <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={inputValues.doggoText}
//           onChange={handleChanges}
//           name="doggoText"
//         />
//         <input
//           type="text"
//           value={inputValues.kittyText}
//           onChange={handleChanges}
//           name="kittyText"
//         />
//         <button type="submit">Fetch Doggos</button>
//       </form>
//      </div>
         
//      ))}
//      </div>
     
//     );
   
//    }
//   }
// export default App; 


function App(props) {
  const [womens, setWomens] = useState([]);
  const [url, setUrl] = useState("http://localhost:5000/api/players");

  const fetchWomens = () => {
    setUrl(`http://localhost:5000/api/players`);
  };
  const [inputValues, handleChanges, handleSubmit] = useForm(
    "womens",
    {
      womensText: ""
    },
    fetchWomens
  );

  useEffect(() => {
    axios
      .get(url)
      .then(res => setWomens(res.name))
      .catch(err => console.error("error in axios call: ", err));
  }, [url]);

  return (
    <div className="App">
      <h1>Womens!</h1>
      {/* <Card>
      <Card.Content>
       
        <Card.Header>
          {url}
          </Card.Header>
        <Card.Meta>{props.name}</Card.Meta>
        <Card.Description>
          Steve wants to add you to the group <strong>best friends</strong>
        </Card.Description>
      </Card.Content>
    
    </Card> */}
     
    </div>
  );
}


export default App; 



