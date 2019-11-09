import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

class Players extends React.Component {
  constructor() {
    super();
    this.state = {
      player: [{}]
    };
  }

  componentDidMount = () => {
    fetch(`http://localhost:5000/api/players`)
      .then(player => player.json(player))
      .then(player => {
        console.log("td: CDM: fetch: then: player: ", player);
        this.setState({
          player: player
        });
      })
      .catch(err =>
        console.log("td: catch: err", err)
      );
  };

  render() {
    return (
      <div>
        {this.state.player.map(p => (
          <Card>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h1">
                   {p.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="h2">
                  Country: {p.country}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="h2">
                  Searches: {p.searches}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="h2">
                  Searches: {p.id}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    );
  }
}

export default Players;
