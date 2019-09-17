import React, {useState} from "react";
import ReactDOM from 'react-dom';
import Team from './Components/Team';
import './App.css';
import './index.css';
import {ThemeProvider, createGlobalStyle} from 'styled-components';



const GlobalStyle = createGlobalStyle`
body {
  background-color: ${props => props.theme.mode === 'dark' ? '#111' : '#ADD8E6'};
  color: ${props => props.theme.mode === 'dark' ? '#00000' : '#00000'};
}`;


const App = () => {
const [theme, setTheme] = useState({mode: 'light'});

  return (
    < ThemeProvider theme={theme}> 
      <React.Fragment>
    {/* ^^Resolves the error 'React.Children.only expected to receive a single React element child' */}
    <GlobalStyle />
    <div className='App'>
      <button className='button' onClick = { e =>setTheme(theme.mode === 'dark'
        ? { mode: 'light' }
        : { mode: 'dark' })}>
        Dark Mode
      </button>
      < Team />
    </div>
    </React.Fragment>
    </ThemeProvider>
  )}

export default App;