import React, {useState} from 'react';


import Container from '@material-ui/core/Container';

import {ThemeProvider} from '@material-ui/core/styles';
import CSSBaseline from '@material-ui/core/CssBaseline';
import {lightTheme, darkTheme} from './themes';

import CardList from './components/CardList';

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <CSSBaseline />
   <Container maxWidth='md' style={{margin: '0 auto'}}>
    <CardList/>
   </Container>
   </ThemeProvider>
  )
}
