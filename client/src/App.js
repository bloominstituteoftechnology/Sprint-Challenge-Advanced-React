import React from 'react';
import './App.css';
import Display from "./components/Display";
import useFetch from './hooks/useFetch';

function App() {
  const res = useFetch("http://localhost:5000/api/players", {});

  return (
    <div>
      <Display res={res} />
    </div>
  );
}

export default App;
