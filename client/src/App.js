import React from "react";
import axios from "axios";

import "./App.css";

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

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dataComing: "alex"
    };
  }
  componentDidMount() {
    axios.get("http://localhost:5000/api/players").then(resp => {
      const data = resp.data;
    });
  }
  render() {
    return <div>ssss{this.state.dataComing} </div>;
  }
}

export default App;
