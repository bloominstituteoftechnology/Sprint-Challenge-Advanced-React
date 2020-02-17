import React from "react";
import axios from "axios";
import "../style.scss";
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default class DataRendering extends React.Component {
  constructor() {
    super();
    this.state = {
      women: []
    };
  }
  componentDidMount() {
    axios.get("http://localhost:5000/api/players").then(dataComing => {
      this.setState({ women: dataComing.data });
      console.log(this.state.women);
    });
  }
  render() {
    console.log(this.state.women);

    return (
      <>
        <div>
          {this.state.women.map(woman => (
            <div className='datarennderdiv'>
              <div> Name: {woman.name} </div>

              <div> Country: {woman.country}</div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

//
