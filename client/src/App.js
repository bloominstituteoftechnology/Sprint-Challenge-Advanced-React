import React from 'react';
import './App.css';
import { useLocalStorage } from './utils/input';
import { usePlayerData } from './utils/api';

function App() {
  // Call custom hooks here
  const [country, setCountry] = useLocalStorage("country", "United States");
  const [searches, setSearches] = usePlayerData(country);

  return (
    <>

      <h1>Most Searched Women's World Cup Players</h1>

      <select value={country} onChange={e => setCountry(e.target.value)}>
        <option value="United States">United States</option>
        <option value="Brazil">Brazil</option>
      </select>
    

      {searches.map(search => (
        <div key={search.id}>
        <h2>Player: {search.name}</h2>
        <h2>Searches: {search.searches}</h2>
        <h2>Country: {search.country}</h2>
        </div>

      ))}

    <button onClick={() => setSearches([])}>
        Clear Search
      </button>

    </>
  );
}

export default App;
