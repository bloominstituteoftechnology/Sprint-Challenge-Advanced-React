import React from 'react';
import './App.css';

function App() {
  const [player, setPlayer] =setState([]);

useEffect(() => {
  axios
      .get('http://localhost:5000/api/players')
      .then(res => {
        console.log(res.data)
        .catch(err => {
          console.log(err.response)
        })
      })

}, [])

  return (
    <div className="App">
    <h1>HI</h1>
    </div>
  );
}

export default App;
