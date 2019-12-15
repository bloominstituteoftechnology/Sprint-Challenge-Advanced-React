import React, { useState, useEffect } from "react";
import Axios from "axios";
import PlayerCard from "./PlayerCard";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      display: "stretch",
      marginTop: "16px"
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    Link: {
      textDecoration: "none",
      color: "inherit"
  }
  }));

export default function SearchForm(props) {
    const classes = useStyles();
    const [ country, setCountry ] = useState([]);
    const [ filter, setFilter ] = useState("");
 
useEffect(() => {
  Axios
  .get("http://localhost:5000/api/players")
  .then (response => {
    const players = response.data.filter(player => player.name.toLowerCase().includes(filter.toLocaleLowerCase())
      );
      setCountry(players);
  });
  },[filter]);

  const HandleChange = event => {
    setFilter(event.target.value)
  };

    return (
        <section>
        <FormControl variant="outlined" className={classes.formControl}>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={filter}
          onChange={HandleChange}
        >
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
          <MenuItem value={"United States"}>United States</MenuItem>
          <MenuItem value={"Sweden"}>Sweden</MenuItem>
        </Select>  
        </FormControl>

        {country.map((player => {
        return (
        <PlayerCard 
        key={player.country}
        name={player.name} 
        searches={player.searches} 
        />     
        )})
        )}
        </section>
    );
}