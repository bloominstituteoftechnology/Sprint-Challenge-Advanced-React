import React from 'react';

import PlayerCard from './PlayerCard';
import useDarkMode from '../hooks/useDarkMode';

import { Paper, Box, Container, Button } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  flexBox: {
    width: '180px',
    margin: '10px',
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '150px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',
  },
}));

const PlayerList = ({ players }) => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  const classes = useStyles();
  return(
    <>
      <Container maxWidth="lg">
        <Button variant="outlined" color="secondary" onClick={toggleMode}>Toggle Dark Mode</Button>
        <Box display="flex" flexWrap="wrap" alignItems="center" justifyContent="flex-start">
          {players.map(player => (
            <Box className={classes.flexBox}>
              <Paper className={classes.paper}>
                <PlayerCard player={player} key={player.id} />
              </Paper>
            </Box>
          ))}
        </Box>
      </Container>
    </>
  )
}

export default PlayerList;