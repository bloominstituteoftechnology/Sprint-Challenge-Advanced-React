import React, {useState} from 'react';


import Container from '@material-ui/core/Container';
import {ThemeProvider} from '@material-ui/core/styles';
import CSSBaseline from '@material-ui/core/CssBaseline';
import {lightTheme, darkTheme} from './themes';



export default function App() {
  const [data, setData] = useState([])
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <CSSBaseline />
   <Container maxWidth='md'></Container>
   </ThemeProvider>
  )
}
