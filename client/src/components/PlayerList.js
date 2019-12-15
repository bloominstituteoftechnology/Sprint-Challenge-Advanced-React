import React from 'react';
import PlayerCard from './PlayerCard';
import { Paper, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    paper: {
      textAlign: 'center',
      height: '150px',
      width: '300px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '10px',
      border: '1px solid black',
      margin: '10px 20px 10px',
    },
    container: {
        display:'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
  }));

const PlayerList = ({ players }) => {
    const classes = useStyles();

    return(
        <>
        <Container className={classes.container}>
            {players.map(player => (
                <Paper className={classes.paper}>
                  <PlayerCard key={player.id} player={player} />
                </Paper>
            ))}
        </Container>
      </>
    )
}

export default PlayerList;