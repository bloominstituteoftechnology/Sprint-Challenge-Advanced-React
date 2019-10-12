import React from 'react';
import { useLocalStorage } from './hooks/localStorage';


// import './App.css';

function App(props) {
  const[player, setPlayer] = useLocalStorage('player', 'country');
  const[search, setSearch] = useLocalStorage('search', 1);
  // const [players] = useState([]);

  return (
    <>
      <h1>Women's World Cup - 2019 </h1>
      <select value={player} onChange={e => setPlayer(e.target.value)}> 
      </select>

      <input
      type='number' placeholder='Search Count' value={search} onChange={e => setSearch(e.target.value)} />

      {/* <div>
        {players.map((player, index) => (
          <
        ))}
      </div> */}
  );
}

export default App;