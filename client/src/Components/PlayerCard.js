import React from 'react';

// Styling
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
        minWidth: 50,
    },
    title: {
        fontSize: 21,
    },
    body: {
        fontSize: 17,
    },
    pos: {
        marginBottom: 15,
    },
});

const PlayerCard = props => {
    const classes = useStyles();

    return (
        <div className='player-card'>
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} color='textPrimary'>
                        {props.name}
                    </Typography>
                    <Typography>
                    ( {props.country} )
                    </Typography>
                    Google Searches: {props.searches}
                </CardContent>

            </Card>
        </div>
    );
};

export default PlayerCard;