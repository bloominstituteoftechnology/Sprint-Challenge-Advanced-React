import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import PlayerData from './components/playerData';
import { lightTheme, darkTheme } from './theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';

function App() {
  const [theme, setTheme] = useState('light');
  //setting toggle for dark and light 
  const toggleTheme = () => {
    // if the theme is not light, then set it to dark
    if (theme === 'light') {
      setTheme('dark');
    // otherwise, it should be light
    } else {
      setTheme('light');
    }
  }


  return (
    
    <ThemeProvider theme={theme === 'light' ? lightTheme 
    : darkTheme}>

    <div className="App">
    <button onClick={toggleTheme}>Toggle Theme</button>
    <h1>Women's World Cup</h1>
    <h2>Players</h2>
    
    <GlobalStyles />
      <header className="App-header">
       <PlayerData />
      </header>
    </div>
    </ThemeProvider>
    
  );
}

export default App;
