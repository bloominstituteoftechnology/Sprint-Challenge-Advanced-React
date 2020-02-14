import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';



class PlayerCard extends React.Component {
    render() {
        return (
            <Card style={{width: '300px', height: '130px'}}>
                <CardContent>
                    <Typography variant="h5">{this.props.name}</Typography>
                    <Typography variant="h6">{this.props.country}</Typography>
                    <Typography variant="body1">{this.props.searches} searches.</Typography>
                </CardContent>
            </Card>
        )
    }
}

export default PlayerCard;