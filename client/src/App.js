import React from 'react';
import CardList from './comps/CardList';
import { useDark } from './hooks/useDark';

function App() {
  const [dark, setDark] = useDark(false);

  return (
    <div className="app">
      <button onClick={() => setDark(!dark)}>Toggle Dark</button>
      <CardList dark={dark} />
    </div>
  );
}

export default App;
